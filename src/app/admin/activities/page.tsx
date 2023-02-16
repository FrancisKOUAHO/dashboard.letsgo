"use client"

import { isAuthorized } from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";
import { Button } from "@/app/components/atoms/button/button";
import Input from "@/app/components/atoms/input/input";
import LoadingSpinner from "@/app/components/atoms/loadingspinner/LoadingSpinner";
import Image from "next/image";
import Card from "@/app/components/atoms/card/card";
import { useActivities } from "@/app/hooks/useActivities";


const Page = () => {
  const authorized = isAuthorized('admin')

  const { data, status, error } = useActivities()

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  if (status === 'loading') return <LoadingSpinner/>
  if (error === 'error') return <div>Erreur...</div>

  console.log("data", data)


  return (
    <LayoutCustom>
      <div className="c-activities">
        <h2>Tous les activités</h2>

        <div className="c-activities__title">
          <div>
            <Button color="primary" isActive={true}>
              Ajouter
            </Button>
            <div>
              <div>
                <Input className="c-input" type="text" placeholder="Rechercher une activité..."/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="c-activities__container">
          {
            data && data.data.map((activity: any, index: number) =>{
              return(
                <Card className="c-card" key={index}>
                  <Image src="" width="100" height="100" alt={""}/>
                </Card>
              )
            })
          }
        </div>
      </div>
    </LayoutCustom>
  )
}

export default Page
