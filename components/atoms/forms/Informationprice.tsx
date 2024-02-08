'use client'

import {Button} from "@/components/atoms/button/button";
import React, {useState} from "react";
import Input from "@/components/atoms/input/input";
import {useAuth} from "@/context/AuthContext";
import { useActivitiesById } from "@/hooks/useActivities";


const InformationActivityPrice = () => {
    const {user} = useAuth();
    const { data: activitiesData } = useActivitiesById(user?.id);

    return (
        <form  className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
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
                            name="organisator_id"
                            className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
                        >
                            {activitiesData && activitiesData.data.map((activity: any) => (
                                <option key={activity.id} value={activity.id}>{activity.name}</option>
                            ))}                    </select>
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
                        <Input className="c-input flex-1 mb-2" name="city" type="text" placeholder="Nom du prix" required={true} />
                        <Input className="c-input flex-1 mb-2" name="city" type="text" placeholder="Quantité" required={true} />
                        <Input className="c-input flex-1 mb-2" name="city" type="text" placeholder="12 euros" required={true} />
                    </div>
                </div>
                <div className="flex flex-col justify-end gap-2 mt-12 md:flex-row">
                    <Button color="primary" isActive={true} type="submit">
                        Suivant
                    </Button>
                </div>
            </div>
        </form>
    )
}


export  default InformationActivityPrice

