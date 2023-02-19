'use client'

import {Button} from "@/app/components/atoms/button/button";
import React, {useState} from "react";
import Input from "@/app/components/atoms/input/input";
import TextArea from "@/app/components/atoms/textArea/textArea";

interface FormValues {
  address: string,
  cancellation_conditions: string,
  category_id: string,
  city: string,
  description: string,
  duration: string,
  name: string,
  practical_information: string,
  price: string,
  compagny: string,
  programme: string,
  schedule: Object
}

const initialFormValues: FormValues = {
  address: "",
  cancellation_conditions: "",
  category_id: "",
  city: "",
  description: "",
  duration: "",
  name: "",
  practical_information: "",
  price: "",
  compagny: "",
  programme: "",
  schedule: ""
};


const InformationActivity = ({onNext}: { onNext: (values: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValues({
      ...formValues,
      address: "19999",
    });
    console.log(formValues)
    onNext(formValues);
  };

  console.log(formValues)
  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      > {'Informations de l\'activité'}
      </div>
      <div className="mt-5">
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Nom de l\'activité'}</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
            <div className="mt-3 text-xs leading-relaxed text-slate-500"> Évitez les noms trop long
              {'avec trop d\'informations, et les noms trop court pas assez explicite.'}
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input"
              type="text" placeholder="Nom de l'activité"/>
            <div className="text-xs text-slate-500 mt-2 text-right"> Maximum de caractères 0/70</div>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Durée de l\'activité'}</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input className="c-input" placeholder="Exemple: 10 min"/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Companie</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              <option value="e2f0c600-8628-40b3-a2fc-25e53abf982a">Ateliers</option>
              <option value="de55b0db-cf3b-4785-aaa7-03dc10fd5e97">Pilotage</option>
              <option value="d6dd2b41-f820-4515-b693-03a302a8a26b">{'Let\'s Go'}</option>
              <option value="d2b7e54c-f54d-4594-ab47-ecf71936e024">Musique</option>
              <option value="ca76a745-5ae8-4c69-a8e5-abde75d4413f">Sports</option>
              <option value="c59e26e9-889f-4146-bf13-f8519f131980">Aventure</option>
              <option value="bc95794d-2e5b-4368-bfef-a17a6b710aec">Aquatique</option>
              <option value="b65900b5-59d5-4bab-9357-4ae6e4051335">Bien Etre</option>
              <option value="b2fd31af-bf44-472a-8e58-5bdb6daadbec">Gastronomie</option>
              <option value="aed4a112-279c-4d50-9fd1-43239ffdfd73">Virtuel</option>
              <option value="abb79b0c-b445-4cbc-9e2e-dde7efb09524">Air &amp; Vol</option>
              <option value="88d9e624-d818-4583-9981-e5caac803276">Insolites</option>
              <option value="4626d873-06fd-4d57-9309-b5b50e1faa01">Parcs &amp; Fun</option>
              <option value="183718c4-53d0-4031-8045-8ebabc8b96e5">Culturel</option>
            </select>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Categorie</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              <option value="e2f0c600-8628-40b3-a2fc-25e53abf982a">Ateliers</option>
              <option value="de55b0db-cf3b-4785-aaa7-03dc10fd5e97">Pilotage</option>
              <option value="d6dd2b41-f820-4515-b693-03a302a8a26b">{'Let\'s Go'}</option>
              <option value="d2b7e54c-f54d-4594-ab47-ecf71936e024">Musique</option>
              <option value="ca76a745-5ae8-4c69-a8e5-abde75d4413f">Sports</option>
              <option value="c59e26e9-889f-4146-bf13-f8519f131980">Aventure</option>
              <option value="bc95794d-2e5b-4368-bfef-a17a6b710aec">Aquatique</option>
              <option value="b65900b5-59d5-4bab-9357-4ae6e4051335">Bien Etre</option>
              <option value="b2fd31af-bf44-472a-8e58-5bdb6daadbec">Gastronomie</option>
              <option value="aed4a112-279c-4d50-9fd1-43239ffdfd73">Virtuel</option>
              <option value="abb79b0c-b445-4cbc-9e2e-dde7efb09524">Air &amp; Vol</option>
              <option value="88d9e624-d818-4583-9981-e5caac803276">Insolites</option>
              <option value="4626d873-06fd-4d57-9309-b5b50e1faa01">Parcs &amp; Fun</option>
              <option value="183718c4-53d0-4031-8045-8ebabc8b96e5">Culturel</option>
            </select></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Partenaire</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <select
              className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
            >
              <option value="e2f0c600-8628-40b3-a2fc-25e53abf982a">Ateliers</option>
              <option value="de55b0db-cf3b-4785-aaa7-03dc10fd5e97">Pilotage</option>
              <option value="d6dd2b41-f820-4515-b693-03a302a8a26b">{'Let\'s Go'}</option>
              <option value="d2b7e54c-f54d-4594-ab47-ecf71936e024">Musique</option>
              <option value="ca76a745-5ae8-4c69-a8e5-abde75d4413f">Sports</option>
              <option value="c59e26e9-889f-4146-bf13-f8519f131980">Aventure</option>
              <option value="bc95794d-2e5b-4368-bfef-a17a6b710aec">Aquatique</option>
              <option value="b65900b5-59d5-4bab-9357-4ae6e4051335">Bien Etre</option>
              <option value="b2fd31af-bf44-472a-8e58-5bdb6daadbec">Gastronomie</option>
              <option value="aed4a112-279c-4d50-9fd1-43239ffdfd73">Virtuel</option>
              <option value="abb79b0c-b445-4cbc-9e2e-dde7efb09524">Air &amp; Vol</option>
              <option value="88d9e624-d818-4583-9981-e5caac803276">Insolites</option>
              <option value="4626d873-06fd-4d57-9309-b5b50e1faa01">Parcs &amp; Fun</option>
              <option value="183718c4-53d0-4031-8045-8ebabc8b96e5">Culturel</option>
            </select>
          </div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">{'Adresse de l\'activité'}</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input className="c-input" type="text" placeholder="Ex: 15 Rue de Paris"/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Ville</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input flex-1"
              type="text" placeholder="Ex: Paris"/></div>
        </div>
        <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Price</div>
              <div
                className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <Input
              className="c-input"
              type="text" placeholder="14 euros"/></div>
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

const DetailsActivity = ({ onPrevious, onNext }: { onPrevious: () => void, onSubmit: (values: FormValues) => void, onNext: (values: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const [currentStep, setCurrentStep] = useState(2);

  const handleNext = (values: FormValues) => {
    setCurrentStep(currentStep + 1);
    setFormValues({...formValues, ...values});
    onNext({...formValues, ...values});
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: any = Object.fromEntries(formData.entries());
    console.log("values", values);
    setFormValues({
      ...formValues,
      ...values,
    });
    onNext(values);
    console.log("formValues", formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"> {"Détails de l'activité"}</div>
      <TextArea name="description"
                title="Description de l'activité"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />
      <TextArea name="programme"
                title="Au programme"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />
      <TextArea name="cancellation_conditions"
                title="Conditions d'annulation"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />
      <TextArea name="practical_information"
                title="informations pratiques"
                description="Assurez-vous que la description du produit fournit une explication détaillée de votre produit afin qu'il soit facile de comprendre et de trouver votre produit."
      />

      <div className="flex flex-col justify-between gap-2 mt-12 md:flex-row">
        <Button color="primary" onClick={onPrevious}>
          Précédent
        </Button>
        <Button color="primary" isActive={true} type="submit">
          Suivant
        </Button>
      </div>
    </form>
  )
}

const ActivitySchedule = ({ onPrevious, onSubmit }: { onPrevious: () => void, onSubmit: (values: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  console.log("formValues", formValues);

  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const [schedule, setSchedule] = useState<{ dates: { date: string, hours: string[] }[] }>({dates: []});

  const handleAddSchedule = (event: any) => {
    event.preventDefault();

    console.log('add schedule', date, hour)

    if (!date || !hour) {
      console.log("Veuillez entrer une date et une heure");
      return;
    }

    const newSchedule = {
      date,
      hours: [hour]
    };

    // Vérifiez si une entrée avec la même date existe déjà dans la liste
    const existingEntryIndex = schedule.dates.findIndex(s => s.date === date);

    if (existingEntryIndex !== -1) {
      // Si une entrée existe déjà pour cette date, ajoutez simplement l'heure à la liste des heures
      schedule.dates[existingEntryIndex].hours.push(hour);
      setSchedule({
        dates: [...schedule.dates]
      });
    } else {
      // Sinon, créez une nouvelle entrée avec la date et l'heure
      setSchedule({
        dates: [...schedule.dates, newSchedule]
      });
    }

    // Réinitialiser les valeurs de date et d'heure après la soumission du formulaire
    setDate("");
    setHour("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValues({
      ...formValues,
      schedule: schedule
    });
    console.log('submit', formValues)
    onSubmit(formValues);
  };

  return (
    <form className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
      <div
        className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
      >
        {"Horaires de l'activité"}
      </div>
      <div className="mt-5">
        <div className="block sm:flex flex-col items-start pt-2 mt-2 xl:flex-row first:mt-0 first:pt-0"
        ><label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10"
        >
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium">Variant 1</div>
            </div>
          </div>
        </label>
          <div className="flex-1 w-full mt-3 xl:mt-0">
            <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border"
            >
              <div>
                <div className="block sm:flex items-center mt-5 first:mt-0"><label
                  className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right sm:w-20">Date</label>
                  <div className="flex items-center flex-1 xl:pr-20">
                    <div className="flex flex-1"><input className="c-input" value={date} name="date"
                                                        onChange={e => setDate(e.target.value)}
                                                        type="date" placeholder="Size"/>
                      <div
                        className="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
                      >1
                      </div>
                    </div>
                  </div>
                  <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right sm:w-20"
                  >Heure</label>
                  <div className="flex items-center flex-1 xl:pr-20">
                    <div className="flex flex-1"><input
                      value={hour} name="hour" onChange={e => setHour(e.target.value)}
                      className="c-input"
                      type="time" placeholder="Size"/>
                      <div
                        className="py-2 px-3 bg-slate-100 border shadow-sm border-slate-200 text-slate-600 dark:bg-darkmode-900/20 dark:border-darkmode-900/20 dark:text-slate-400 rounded-none [&amp;:not(:first-child)]:border-l-transparent first:rounded-l last:rounded-r"
                      >1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                  <Button color="primary" onClick={handleAddSchedule}>Ajouter</Button>
                </div>
              </div>
              <pre>{JSON.stringify(schedule, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 mt-12 md:flex-row">
        <Button color="primary" onClick={onPrevious} isActive={true}>
          Précédent
        </Button>
        <Button type="submit" color="primary" onClick={handleSubmit}>Enregistrer</Button>
      </div>
    </form>
  )
}

export {
  DetailsActivity,
  InformationActivity,
  ActivitySchedule
}
