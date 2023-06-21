'use client'

import { useRouter } from "next/navigation"
import React from "react"
import { Heading } from "./heading"
import { ButtonPrimary } from "@/main/ui"

interface Props {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export const EmptyState: React.FC<Props> = ({
  title = 'Nenhuma correspondência',
  subtitle = 'Tente alterar ou remover alguns de seus filtros',
  showReset
}) => {
  const router = useRouter()


  return (
    <div
      className="h--[60vh] flex flex-col gap-2 justify-center items-center"
    >
      <Heading
        asCenter
        title={title}
        subtitle={subtitle}
      />
      <div className="mt-4">
        {showReset && (
          <ButtonPrimary styles="outline" onClick={()=>router.push('/')}>
            Remove all filters
          </ButtonPrimary>
        )}
      </div>
    </div>
  )
}
