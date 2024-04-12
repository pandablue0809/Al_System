/**
 * @author Tahara Kazuki
 * @created 04/11/2024
 * @lastModified 04/11/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import { DEFAULT_MODELS } from "../constants/configConstant";

export type ModelType = (typeof DEFAULT_MODELS)[number]['name'];

export type LLMModel = {
    name: string;
    available: boolean;
}