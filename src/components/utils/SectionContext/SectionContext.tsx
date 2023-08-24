// SectionContext.tsx
import React, { createContext, useContext, useState } from 'react'

interface SectionContextType {
  activeSection: string
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

interface SectionProviderProps {
  children: React.ReactNode // Define the type for children prop
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const useSectionContext = () => {
  const context = useContext(SectionContext)
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider')
  }
  return context
}

export const SectionProvider: React.FC<SectionProviderProps> = ({
  children
}) => {
  const [activeSection, setActiveSection] = useState<string>('About')

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}
