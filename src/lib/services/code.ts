import api from "../axiosInstance";
import { handleAxiosError } from "../utils";

export const run = async (
    source_code: string,
    language_id: number,
    stdin: string
) => {
    try {
        const res = await api.post("/code/run", {
            source_code,
            language_id,
            stdin,
        });

        return { success: true, data: res.data.data };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const save = async (
    userId: string,
    source_code: string,
    language_id: number,
    result: string
) => {
    try {
        const res = await api.post("/code/save", {
            userId,
            source_code,
            language_id,
            result,
        });

        return { success: true };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getAllPrograms = async (userId: string) => {
    try {
        const res = await api.get(`/code/history/${userId}`);

        return { success: true, progs: res.data };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getSpeceficProgram = async (programId: string) => {
    try {
        const res = await api.get(`/code/specefic/${programId}`);

        return { success: true, prog: res.data };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
