import { useEffect } from "react"
import { imagePromptStore } from "../store/store"
import { genImage } from "../services/genImages_service"


const Result = () => {
    const prompt = imagePromptStore((state) => state.prompt)
    useEffect(() => {
        getImage()
    })
    const getImage = async () => {
        try {
            const response = await genImage(prompt)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally{
            console.log('finally')
        }
    }
  return (
    <div>Result</div>
  )
}

export default Result