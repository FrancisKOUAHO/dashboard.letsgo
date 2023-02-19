"use client"

import {IsAuthorized} from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";
import {Button} from "@/app/components/atoms/button/button";
import Input from "@/app/components/atoms/input/input";
import LoadingSpinner from "@/app/components/atoms/loadingspinner/loadingSpinner";
import Card from "@/app/components/atoms/card/card";
import {useActivities} from "@/app/hooks/useActivities";
import IconText from "@/app/components/atoms/iconText/iconText";
import {useState} from "react";
import Modal from "@/app/components/atoms/modal/modal";
import {ActivitySchedule, DetailsActivity, InformationActivity} from "@/app/components/atoms/forms/information";


type FormValues = {
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


const Page = () => {
  const authorized = IsAuthorized("admin")

  const {data, status, error} = useActivities()

  let [isOpen, setIsOpen] = useState(false)

  const closeModal = (): void => {
    setIsOpen(false)
  }

  const openModal = (): void => {
    setIsOpen(true)
  }


  const itemsPerPage = 8
  const totalActivities = data?.data.length
  const pageCount = Math.ceil(totalActivities / itemsPerPage)

  const [page, setPage] = useState(1)

  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleNext = (values: FormValues) => {
    setCurrentStep(currentStep + 1);
    setFormValues({ ...formValues, ...values });
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted with values:", values);
    // TODO: Submit form data to backend
  };

  if (!authorized) return <div>Not Authorized</div>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <div>Erreur...</div>

  return (
    <LayoutCustom>
      <div className="c-activities">
        <h2>Tous les activités</h2>

        <div className="c-activities__title">
          <div>
            <Button color="primary" isActive={true} onClick={openModal}>
              Ajouter
            </Button>
            <div>
              <div>
                <Input className="c-input" type="text" placeholder="Rechercher une activité..."/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="c-activities__container">
          {data &&
            data.data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((activity: any, index: number) => {
                return (
                  <Card className="c-card" key={index}>
                    <img
                      src={activity.image}
                      width="100"
                      height="100"
                      alt=""
                      onError={(e: any) => {
                        e.target.src = `https://letsg0.fr/img/LetsGo.svg`;
                      }}
                    />
                    <IconText
                      title={activity.name}
                      price={activity.price}
                      numberOfPlaces="2"
                      status="Confirmer"
                    />
                  </Card>
                );
              })}
        </div>

        {data && (
          <nav className="c-activities__navigation">
            <ul>
              <li>
                <button
                  onClick={() => setPage(page-1)}
                  className="transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">Prev
                </button>
              </li>
              {Array.from({length: pageCount}, (_, i) => i + 1).map((num) => (
                <li key={num}>
                  <button
                    onClick={() => setPage(num)}
                    className={`transition-colors duration-150 ${num === page ? "active" : ""}`}> {num}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPage(page+1)}
                  className="transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Suivant
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} name="Ajouter une activité">
        {currentStep === 1 && <InformationActivity onNext={handleNext} />}
        {currentStep === 2 && <DetailsActivity onPrevious={handlePrevious} onSubmit={() => handleSubmit(formValues)} onNext={handleNext} />}
        {currentStep === 3 && <ActivitySchedule onPrevious={handlePrevious} onSubmit={() => handleSubmit(formValues)} />}
      </Modal>
    </LayoutCustom>
  )
}

export default Page
