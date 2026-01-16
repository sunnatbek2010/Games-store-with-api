import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Addgames = () => {
    const { register, handleSubmit, reset } = useForm();
    const apiurl = import.meta.env.VITE_HOME_URL;
    const [message, setMessage] = useState('');

    const onSubmit = async (formData) => {
        try {
            const response = await axios.post(apiurl, formData);
            console.log('Игра успешно добавлена:', response.data);
            setMessage('Игра успешно добавлена!');
            reset();
        } catch (error) {
            console.error('Ошибка при добавлении игры:', error.response?.data || error.message);
            setMessage('Ошибка при добавлении игры.');
        }
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-10 w-full max-w-md shadow-lg border border-white/30">
                <h1 className="text-3xl font-bold text-white text-center mb-6">Добавить игру</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("gamename", { required: true })}
                        type="text"
                        placeholder="Game Name"
                        className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm text-white placeholder-white/70 border border-white/40 focus:border-white focus:outline-none transition-all duration-300 hover:bg-white/40"
                    />
                    <input
                        {...register("gameurl", { required: true })}
                        type="text"
                        placeholder="Game Image URL"
                        className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm text-white placeholder-white/70 border border-white/40 focus:border-white focus:outline-none transition-all duration-300 hover:bg-white/40"
                    />
                    <input
                        {...register("windowsversion")}
                        type="text"
                        placeholder="Windows Version"
                        className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm text-white placeholder-white/70 border border-white/40 focus:border-white focus:outline-none transition-all duration-300 hover:bg-white/40"
                    />
                    <input
                        {...register("ram")}
                        type="text"
                        placeholder="RAM"
                        className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm text-white placeholder-white/70 border border-white/40 focus:border-white focus:outline-none transition-all duration-300 hover:bg-white/40"
                    />
                    <input
                        {...register("memory")}
                        type="text"
                        placeholder="Memory"
                        className="px-4 py-2 rounded-lg bg-white/30 backdrop-blur-sm text-white placeholder-white/70 border border-white/40 focus:border-white focus:outline-none transition-all duration-300 hover:bg-white/40"
                    />
                    <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-white/30 text-white font-bold rounded-lg border border-white/40 backdrop-blur-sm hover:bg-white/50 cursor-pointertransition-all duration-300"
                    >
                        Add Game
                    </button>
                </form>
                {message && <p className="text-white text-center mt-4">{message}</p>}
            </div>
        </div>

    );
};

export default Addgames;
