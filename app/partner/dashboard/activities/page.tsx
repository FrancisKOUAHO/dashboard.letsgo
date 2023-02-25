"use client"

import {useMutation} from "@tanstack/react-query";
import {useState} from "react";
import {toast} from "react-toastify";
import {router} from "next/client";
import {
  ActivitySchedulePartner,
  DetailsActivityPartner,
  InformationActivityPartner, UploadImagePartner
} from "@/components/atoms/forms/informationpartner";
import FormValues from "@/interface/FormValues";
import {IsAuthorized} from "@/utils/auth";
import {useActivities} from "@/hooks/useActivities";
import LayoutCustom from "@/layouts/layoutCustom";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import {Button} from "@/components/atoms/button/button";
import Input from "@/components/atoms/input/input";
import Card from "@/components/atoms/card/card";
import {api, baseUrl} from "@/config/api";
import IconText from "@/components/atoms/icontext/iconText";
import Modal from "@/components/atoms/modal/modal";

const initialFormValues: FormValues = {
  address: "",
  cancellation_conditions: "",
  category_id: "",
  city: "",
  description: "",
  duration: "",
  name: "",
  image: new File([], ''),
  practical_information: "",
  price: "",
  compagny: "",
  programme: "",
  schedule: "",
  organisator_id: ""
};


const Page = () => {
  const authorized = IsAuthorized("partner")

  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [currentStep, setCurrentStep] = useState(1);

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const {data, status, error} = useActivities()


  const itemsPerPage = 8
  const totalActivities = data?.data.length
  const pageCount = Math.ceil(totalActivities / itemsPerPage)

  const closeModal = (): void => {
    setIsOpen(false)
  }

  const openModal = (): void => {
    setIsOpen(true)
  }

  const handleNext = (values: any) => {
    setCurrentStep(currentStep + 1);
    setFormValues({...formValues, ...values});
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };



  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const formData = new FormData();
      formData.append('address', values.address);
      formData.append('cancellation_conditions', values.cancellation_conditions);
      formData.append('category_id', values.category_id);
      formData.append('city', values.city);
      formData.append('description', values.description);
      formData.append('duration', values.duration);
      formData.append('name', values.name);
      formData.append('practical_information', values.practical_information);
      formData.append('price', values.price);
      formData.append('compagny', values.compagny);
      formData.append('programme', values.programme);
      formData.append('schedule', JSON.stringify(values.schedule));
      formData.append('organisator_id', values.organisator_id);
      formData.append('image', values.image);

      await api.post("/activities/createActivity", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
    },
    onSuccess: (data) => {
      toast(`Activitée ajouter`, {position: toast.POSITION.BOTTOM_CENTER});
      closeModal()
      setCurrentStep(1)
      setFormValues(initialFormValues)
      router.push("/admin/dashboard/activities")
    },
  })

  const handleSubmit = (values: any) => {
    mutation.mutate({...formValues, ...values})
  };


  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

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
                        e.target.src = `${baseUrl}${activity.image}`;
                      }}
                    />
                    <IconText
                      title={activity.name}
                      price={`${activity.price} €`}
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
        {currentStep === 1 && <InformationActivityPartner onNext={handleNext}  />}
        {currentStep === 2 && <DetailsActivityPartner onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 3 && <ActivitySchedulePartner onPrevious={handlePrevious} onNext={handleNext} />}
        {currentStep === 4 && <UploadImagePartner onPrevious={handlePrevious} onNext={handleNext}  onsubmit={handleSubmit}/>}
      </Modal>
    </LayoutCustom>
  )
}

export default Page
