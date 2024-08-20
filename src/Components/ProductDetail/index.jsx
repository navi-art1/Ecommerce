import { BeakerIcon } from '@heroicons/react/24/solid'

import './styles.css'
const ProductDetail = ()=>{
    return(
        <aside className='product-detail p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10' >
            <div className='flex justify-between items-center'>
                <h2 className='text-black font-bold'>Detail</h2>

                <div className='w-6 h-6 bg-gray-800 rounded flex justify-center items-center cursor-pointer' ><i class="fa-solid fa-x"></i></div>

            </div>
            
        </aside>
    )

}


export {ProductDetail}