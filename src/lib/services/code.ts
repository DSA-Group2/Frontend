import api from "../axiosInstance";
import { ProgramType } from "../types";
import { handleAxiosError } from "../utils";

export const run = async (
    source_code: string,
    language_id: number,
    stdin: string
) => {
    try {
        const res = await api.post("/code/execute", {
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
    language_id: number
) => {
    try {
        await api.post("/code/save", {
            userId,
            source_code,
            language_id,
        });

        return { success: true };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const update = async (
    progId: string,
    source_code: string,
    language_id: number
) => {
    try {
        await api.put(`/code/save/${progId}`, {
            source_code,
            language_id,
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

        return { success: true, progs: res.data as ProgramType[] };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const deleteProgram = async (codeId: string) => {
    try {
        await api.delete(`/code/delete/${codeId}`);

        return { success: true };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getSpeceficProgram = async (programId: string) => {
    try {
        const res = await api.get(`/code/program/${programId}`);

        return { success: true, prog: res.data as ProgramType };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const askAIAQuestion = async (code: string, query: string) => {
    try {
        const res = await api.post(`/inline`, { query, code });

        return { success: true, code: res.data.editedCode };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
