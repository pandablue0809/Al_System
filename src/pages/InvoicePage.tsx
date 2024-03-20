import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Button, Input} from "@nextui-org/react";
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCardIcon from '@mui/icons-material/AddCard';
import {Tabs, Tab, Card, CardBody, Checkbox} from "@nextui-org/react";


const InvoicePage: React.FC = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

return(
<div className="h-auto min-h-[85%] bg-[#2b2c40f2] m-2">
    <div className="flex gap-4 items-center justify-end m-6">
        <Button color="success"  variant="bordered" endContent={<AddCardIcon/>}>
        New
        </Button>  
        <Button color="secondary"  variant="bordered" endContent={<SaveIcon/>}>
        Save
        </Button>    
        <Button color="danger" variant="bordered" startContent={<DeleteForeverIcon/>}>
        Delete user
        </Button>
    </div>
    <div className='flex xl:flex-row flex-none flex-row items-start pt-10 px-5 gap-10 justify-around'>

    <Table 
    color='success'
    className="w-[30%]"
    selectionMode="single" 
    defaultSelectedKeys={["2"]} 
   
  >
    <TableHeader>
      <TableColumn>NAME</TableColumn>
      <TableColumn>BALANCE</TableColumn>
    </TableHeader>
   
    <TableBody>
      <TableRow key="1">
        <TableCell>Tony Reichert</TableCell>
        <TableCell>$45.00</TableCell>
      </TableRow>
      <TableRow key="2">
        <TableCell>Zoey Lang</TableCell>
        <TableCell>$545.00</TableCell>
      </TableRow>
      <TableRow key="3">
        <TableCell>Jane Fisher</TableCell>
        <TableCell>$903.20</TableCell>
      </TableRow>
      <TableRow key="4">
        <TableCell>William Howard</TableCell>
        <TableCell>$32.50</TableCell>
      </TableRow>
      <TableRow key="5">
        <TableCell>Kiliam Zansan</TableCell>
        <TableCell>$985.50</TableCell>
      </TableRow>
      <TableRow key="6">
        <TableCell>Kaito Suzuki</TableCell>
        <TableCell>$432.50</TableCell>
      </TableRow>
      <TableRow key="7">
        <TableCell>Tony Lang</TableCell>
        <TableCell>$49.00</TableCell>
      </TableRow>
      <TableRow key="8">
        <TableCell>Reichert Tony</TableCell>
        <TableCell>$0.00</TableCell>
      </TableRow>
      <TableRow key="9">
        <TableCell>Kiliam Fisher</TableCell>
        <TableCell>$903.20</TableCell>
      </TableRow>
      <TableRow key="10">
        <TableCell>Fisher Jane</TableCell>
        <TableCell>$32.50</TableCell>
      </TableRow>
      <TableRow key="11">
        <TableCell>Kiliam Kaito</TableCell>
        <TableCell>$0.00</TableCell>
      </TableRow>
      <TableRow key="12">
        <TableCell>Kiliam Suzuki</TableCell>
        <TableCell>$432.50</TableCell>
      </TableRow>
    </TableBody>
     </Table>
     <div className="flex flex-col w-[40%] flex-none">
      <Tabs aria-label="Disabled Options">
        <Tab key="photos" title="EXPENCE">
          <Card>
            <CardBody>
                <h1 className="my-3">Unreimbursed Expense</h1>
                 <Table 
                    color='success'
                    selectionMode="single" 
                    defaultSelectedKeys={["2"]} 
                
                >
                    <TableHeader>
                    <TableColumn>DATE</TableColumn>
                    <TableColumn>EXPENCE</TableColumn>
                    <TableColumn>SELECTED</TableColumn>
                    <TableColumn>BALANCE</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    </TableHeader>
                
                    <TableBody>
                    <TableRow key="1">
                        <TableCell>2023-09-02</TableCell>
                        <TableCell>Food Coast</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Fuels</TableCell>
                        <TableCell>$927.00</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>2023-01-25</TableCell>
                        <TableCell>Gas</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Meals</TableCell>
                        <TableCell>$45.00</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>2022-02-21</TableCell>
                        <TableCell>Gas</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Fuels</TableCell>
                        <TableCell>$645.00</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>2024-03-07</TableCell>
                        <TableCell>Food and Coast</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Meals</TableCell>
                        <TableCell>$125.00</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>2024-01-24</TableCell>
                        <TableCell>Food</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Fuels</TableCell>
                        <TableCell>$645.00</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>2024-03-03</TableCell>
                        <TableCell>Coast</TableCell>
                        <TableCell> <Checkbox /></TableCell>
                        <TableCell>Meals</TableCell>
                        <TableCell>$125.00</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="REIMBURSEMEN">
          <Card>
            <CardBody className="p-4">
                <h1 className="text-center my-2">REIMBURSEMEN</h1>
                <div className="grid grid-cols-2 gap-5 mb-5">
                    <Input  label="REIMB NAME" />
                    <Input  label="REIMB NAME" />
                    <Input  type="date" />
                    <Input  label="REIMB NAME" />
                </div>
                <Input  label="NoTE" />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
</div>
  </div>
  </div>
  );
  
}

export default InvoicePage;
