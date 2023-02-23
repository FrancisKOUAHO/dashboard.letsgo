'use client'

import LayoutCustom from "app/layouts/layoutCustom";
import {IsAuthorized} from "app/utils/auth";
import {useCategories} from "app/hooks/useCategories";
import LoadingSpinner from "app/components/atoms/loadingspinner/loadingSpinner";
import {CategoryContent, TitleTable} from "app/components/atoms/cardcategory/table";
import categories from "app/types/Categories";
import {useState} from "react";

const Page = () => {
  const authorized = IsAuthorized("admin");

  const {data, status, error} = useCategories()

  const itemsPerPage = 7
  const totalActivities = data?.data.length
  const pageCount = Math.ceil(totalActivities / itemsPerPage)

  const [page, setPage] = useState(1)

  if (!authorized) return <LayoutCustom><div className="flex justify-center items-center h-screen">Not Authorized</div></LayoutCustom>
  if (status === "loading") return <LayoutCustom><div className="flex justify-center items-center h-screen"><LoadingSpinner/></div></LayoutCustom>
  if (error === "error") return <LayoutCustom><div className="flex justify-center items-center h-screen">Erreur...</div></LayoutCustom>

  return (
    <LayoutCustom>
      <div className="c-categories">
        <h2>{"Toutes les catégories d'activités"}</h2>

        <TitleTable
          className="c-cardCategory"
          title="Image"
          title_2="Nom de la catégorie"
          title_3="slug"
          title_4="Statut"
          title_5="Actions"
        >
          {
            data &&
            data.data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((category: categories, index: number) => {
                return (
                    <CategoryContent key={index} name={category.name} image={category.image}/>
                )
              })
          }
        </TitleTable>

        {data && (
          <nav className="c-activities__navigation">
            <ul>
              <li>
                <button
                  onClick={() => setPage(page - 1)}
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
                  onClick={() => setPage(page + 1)}
                  className="transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </LayoutCustom>
  )
}

export default Page
