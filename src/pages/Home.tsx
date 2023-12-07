
import Button from '../components/Button'
import { useMutation } from 'react-query'
import captureScreenshot from '../utils/utils'


const Home = () => {
    // const uploadScreenshotMutation = () => {
    //     const mutation = useMutation(formData => {
    //       return fetch('/api', formData)
    //     })
    // }
        const uploadScreenshot = () => {

            captureScreenshot()
            // event.preventDefault()
            // uploadScreenshotMutation.mutate(new FormData(event.target))
          }

  return (
    <div className='flex items-center justify-center'>
        <Button onClick={uploadScreenshot} />
    </div>
  )
}

export default Home