import { AxeResults, run } from 'axe-core'

export async function runAxe(container: HTMLElement): Promise<AxeResults> {
  // axe-core can't be directly used in JSDOM without injecting the script.
  // Use the run API with the document root.
  // @ts-ignore
  return await (window as any).axe.run(container)
}
