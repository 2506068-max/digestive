export interface OrganPart {
  id: string
  name: string
  description: string
}

export interface Organ {
  id: string
  name: string
  englishName?: string
  description: string
  functions: string[]
  parts?: OrganPart[]
  image?: string
}

export const ORGANS: Organ[] = [
  {
    id: 'mouth',
    name: 'Mouth',
    englishName: 'Mouth',
    description: 'Where digestion begins — chewing and mixing with saliva.',
    functions: ['Intake food', 'Mechanical digestion', 'Mix with saliva'],
  },
  {
    id: 'stomach',
    name: 'Stomach',
    englishName: 'Stomach',
    description: 'Muscular organ that stores food and mixes it with digestive juices.',
    functions: ['Stores food', 'Mixes food', 'Begins protein digestion'],
    parts: [
      {id:'cardia',name:'Cardia',description:'Entry from the esophagus'},
      {id:'fundus',name:'Fundus',description:'Top part of the stomach'},
      {id:'body',name:'Body',description:'Main central region'},
      {id:'antrum',name:'Antrum',description:'Lower section that grinds food'},
      {id:'pylorus',name:'Pylorus',description:'Outlet to the small intestine'}
    ]
  },
  {
    id: 'liver',
    name: 'Liver',
    englishName: 'Liver',
    description: 'Produces bile that helps digest fats.',
    functions: ['Produces bile', 'Metabolizes nutrients'],
  }
]
