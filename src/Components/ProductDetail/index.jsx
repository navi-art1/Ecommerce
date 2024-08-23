import { BeakerIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingContext } from '../../Context'

import './styles.css'
const ProductDetail = ()=>{

    const context = useContext(ShoppingContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail p-4 flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10`} >
            <div className='flex justify-between items-center'>
                <h2 className='text-black font-bold'>Detail</h2>

                <div className='w-6 h-6 bg-gray-800 rounded flex justify-center items-center cursor-pointer'
                    onClick={()=>context.closeProductDetail()}
                ><i className="fa-solid fa-x"></i></div>

            </div>
            
        </aside>
    )

}




export {ProductDetail}