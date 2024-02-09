'use client'

import React, { FormEvent, useState } from "react";
import { Button } from "@/components/atoms/button/button";
import Input from "@/components/atoms/input/input";
import { useAuth } from "@/context/AuthContext";
import { useActivitiesById } from "@/hooks/useActivities";
import { api } from "@/config/api";

const InformationActivityPrice = ({closeModal}) => {
    const { user } = useAuth();
    const { data: activitiesData } = useActivitiesById(user?.id);
    const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedActivityId) {
            console.error("Aucune activité sélectionnée.");
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Récupérer les valeurs du formulaire et les convertir en chaînes de caractères
        const name = formData.get("name") as string;
        const quantity = formData.get("quantity") as string;
        const price = formData.get("price") as string;

        try {
            const response = await api.post('prices/create_price', {
                activity_id: selectedActivityId,
                name: name,
                quantity: parseInt(quantity),
                price: parseFloat(price)
            });

            if (response.status === 200) {
                console.log('Requête réussie:', response.data);
                closeModal()
            } else {
                console.error('Erreur lors de la requête:', response.statusText);
            }
        } catch (error : any) {
            console.error('Erreur lors de la requête:', error.message);
        }
    }


    const handleActivitySelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedActivityId(event.target.value);
    }
    console.log(selectedActivityId)

    return (
        <form className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400" onSubmit={handleSubmit}>
            <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                {'Informations de l\'activité'}
            </div>
            <div className="mt-5">
                <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                        <div className="text-left">
                            <div className="flex items-center">
                                <div className="font-medium">{"Nom de l'activité"}</div>
                                <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"> Obligatoire
                                </div>
                            </div>
                        </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                        <select
                            name="activity_id"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
                            onChange={handleActivitySelectChange}
                        >
                            <option value="">Sélectionner une activité</option>
                            {activitiesData && activitiesData.data.map((activity: any) => (
                                <option key={activity.id} value={activity.id}>{activity.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                        <div className="text-left">
                            <div className="flex items-center">
                                <div className="font-medium">{'Price'}</div>
                                <div
                                    className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                                > Obligatoire
                                </div>
                            </div>
                        </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                        <Input className="c-input flex-1 mb-2" name="name" type="text" placeholder="Nom du prix" required={true} />
                        <Input className="c-input flex-1 mb-2" name="quantity" type="number" placeholder="Quantité" required={true} />
                        <Input className="c-input flex-1 mb-2" name="price" type="number" placeholder="12 euros" required={true} />
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-2 mt-12 md:flex-row">
                    <Button color="primary" isActive={true} type="submit">
                        Enregistrer
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default InformationActivityPrice;
