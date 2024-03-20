import React, {useEffect} from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { FaChevronDown } from 'react-icons/fa';
import { columns, users, statusOptions } from './data';
import { capitalize } from './utils';
import { BsThreeDotsVertical } from "react-icons/bs";
import ApiIcon from '@mui/icons-material/Api';

const statusColorMap: Record<string, ChipProps['color']> = {
  enable: 'success',
  disable: 'danger',
  pending: 'warning',
};

type User = (typeof users)[0];

const Services = () => {
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'date',
    direction: 'ascending',
  });

  const dropdownStyles = {
    panel: {
      backgroundColor: 'red',
    },
  };

  const [page, setPage] = React.useState(1);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) => Array.from(statusFilter).includes(user.status));
    }

    return filteredUsers;
  }, [users, statusFilter]);


  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'recipient':
        return <User avatarProps={{ radius: 'full', src: user.avatar }} name={cellValue} />;
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-small capitalize'>{cellValue}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
       
        );
        case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Dropdown className="bg-[#27272A] text-white border-none">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                <ApiIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="1" value="API_Key_1">API_Key_1</DropdownItem>
                <DropdownItem key="2" value="API_Key_2">API_Key_2</DropdownItem>
                <DropdownItem key="3" value="API_Key_3">API_Key_3</DropdownItem>
                <DropdownItem key="4" value="API_Key_4">API_Key_4</DropdownItem>
                <DropdownItem key="5" value="API_Key_5">API_Key_5</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);



  return (
    <Table
      aria-label='Example table with custom cells, pagination and sorting'
      isHeaderSticky
      bottomContentPlacement='outside'
      classNames={{
        wrapper: 'max-h-[382px]',
      }}
      selectedKeys={selectedKeys}
      selectionMode='multiple'
      sortDescriptor={sortDescriptor}
      topContentPlacement='outside'
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} allowsSorting={column.sortable}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
      </TableBody>
    </Table>
  );
};

export default Services;
