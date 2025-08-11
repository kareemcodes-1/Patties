import { useCart } from '@/actions';
import Button from '@/components/Button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const ProductPreview = ({product}) => {

    const [accordion, setAccordion] = useState(false);
    const {addToCart, setSize, size} = useCart();
    const [currentIndex, setCurrentIndex] = useState(null);

    const accordionData = [
        {
            id: 1,
            title: "Description",
            desc: "Introducing the Ultimate Double Cheeseburger – a mouthwatering twist on a classic! This juicy, flame-grilled burger is stacked with two perfectly seasoned beef patties, melted cheddar cheese, crisp lettuce, fresh tomatoes, and a tangy house-made sauce, all nestled in a toasted brioche bun. It's the perfect balance of bold flavors and hearty satisfaction. One bite, and you’ll know why it’s a crowd favorite!",
        },
        {
            id: 2,
            title: "Ingredients",
            desc: "Introducing the Ultimate Double Cheeseburger – a mouthwatering twist on a classic! This juicy, flame-grilled burger is stacked with two perfectly seasoned beef patties, melted cheddar cheese, crisp lettuce, fresh tomatoes, and a tangy house-made sauce, all nestled in a toasted brioche bun. It's the perfect balance of bold flavors and hearty satisfaction. One bite, and you’ll know why it’s a crowd favorite!",
        },
        {
            id: 3,
            title: "Shipping",
            desc: "Introducing the Ultimate Double Cheeseburger – a mouthwatering twist on a classic! This juicy, flame-grilled burger is stacked with two perfectly seasoned beef patties, melted cheddar cheese, crisp lettuce, fresh tomatoes, and a tangy house-made sauce, all nestled in a toasted brioche bun. It's the perfect balance of bold flavors and hearty satisfaction. One bite, and you’ll know why it’s a crowd favorite!",
        },
    ]

    function handleAccordion(index){
        setCurrentIndex(index);
        setAccordion(!accordion);
    }

  return (
     <div className='pt-[5rem] lg:space-x mx-[1rem]'>
        {product.map((p) => (
            <div className='flex items-start lg:flex-row flex-col gap-[1rem]' key={Math.random()}>

            <div className='lg:w-[60%] w-full lg:sticky relative top-[15%]'>
            <div className='lg:h-[35rem] h-[25rem] rounded-[1rem] bg-[#80808012] flex items-center justify-center'>
                  <img src={p.img} alt={p.name} className=' rounded-[1rem]'/>
                  </div>
            </div>

            <div className='flex flex-col gap-[1rem] lg:w-[70%] w-full'>
                <div className=''><a href="/">Home /</a><a href="">{p.name} </a></div>
                <h1 className='lg:text-[5rem] text-[3rem]'>{p.name}</h1>
                <span className='text-[1.5rem]'>${p.price}</span>
                <p className='text-[1.1rem]'>{p.description}</p>
               
               <div className='flex items-center gap-[1rem] w-full'>
               <button onClick={() => setSize('Double')} className={ `${size === 'Double' && '!bg-[#ff5227] !text-white'}  btn --border-orange !text-[1.2rem] !w-auto inst-sans uppercase !p-[.5rem] !rounded-[2rem]`}>
                    Double
                </button>
                <button onClick={() => setSize('Large')} className={ `${size === 'Large' && '!bg-[#ff5227] !text-white'}  btn --border-orange !text-[1.2rem] !w-auto inst-sans uppercase !p-[.5rem] !rounded-[2rem]`}>
                    Large
                </button>
                <button onClick={() => setSize('Small')} className={ `${size === 'Small' && '!bg-[#ff5227] !text-white'}  btn --border-orange !text-[1.2rem] !w-auto inst-sans uppercase !p-[.5rem] !rounded-[2rem]`}>
                    Small
                </button>
               </div>

                <Button text={'Add to cart'} className={'text-[1.5rem] py-[1rem]  my-[1.5rem] px-[2rem]'} type={'--border-orange'} onClick={() => addToCart(p)}/>

                <div className='bg-[#f9dff2] rounded-[1rem] p-[1rem]'>
                    <h2 className='text-[2.2rem] pb-[.5rem]'>Taste our other flavors too</h2>

                    <div className='flex flex-col gap-[1.5rem]'>
                    <div className='flex lg:flex-row flex-col lg:items-center items-start gap-[1rem] justify-between w-full '>
                        <div className='flex items-start gap-[1rem]'>
                            <img src={p.img} alt={p.name} className='border border-[#ff5227] rounded-[1rem] w-[6rem] h-[6rem] object-cover'/>

                        <div>
                            <h2 className='text-[1.2rem]'>{p.name}</h2>
                             <span> <span className=' font-medium inst-sans'>4</span>-Pack / ${p.price}</span>
                        </div>
                        </div>

                        <Button type={'--border-orange'} text={'Add'} className={'w-[7rem] p-[.5rem] lg:text-[1.5rem] text-[1.3rem]'}/>
                        
                    </div>

                    <div className='flex lg:flex-row flex-col lg:items-center items-start gap-[1rem] justify-between w-full '>
                        <div className='flex items-start gap-[1rem]'>
                            <img src={p.img} alt={p.name} className='border border-[#ff5227] rounded-[1rem] w-[6rem] h-[6rem] object-cover'/>

                        <div>
                            <h2 className='text-[1.2rem]'>{p.name}</h2>
                             <span> <span className=' font-medium inst-sans'>4</span>-Pack / ${p.price}</span>
                        </div>
                        </div>

                        <Button type={'--border-orange'} text={'Add'} className={'w-[7rem] p-[.5rem] lg:text-[1.5rem] text-[1.3rem]'}/>
                        
                    </div>
                    </div>
                </div>

                 <div className='flex flex-col gap-[1rem]'>
                       {accordionData.map((acc, index) => (
                          <div key={index} className={`cursor-pointer border-b border-[#ff5227] w-full pb-[1rem] transition-transform ${currentIndex === index && accordion ? 'h-auto overflow-auto' : 'h-[5rem] overflow-hidden'}`} onClick={() => handleAccordion(index)}>
                          <div className='flex items-center justify-between'>
                              <h2 className='lg:text-[3rem] text-[2.5rem]'>{acc.title}</h2>

                          <button type="button" className='border border-[#ff5227] rounded-full p-[.5rem]'><Plus /></button>
                          </div>

                          <div className='pt-[2rem]'>
                              <p>{acc.desc}</p>
                          </div>
                     </div>
                       ))}

                       {/* <div className={`cursor-pointer border-b border-[#ff5227] w-full pb-[1rem] transition-transform ${accordion ? 'h-auto overflow-auto' : 'h-[5rem] overflow-hidden'}`} onClick={() => setAccordion((accordion) => !accordion)}>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-[3rem]'>Ingredients</h2>

                            <button type="button" className='border border-[#ff5227] rounded-full p-[.5rem]'><Plus /></button>
                            </div>

                            <div className='pt-[2rem]'>
                                <p>Introducing our Two Chip Chocolate Chip Cookie – a delicious twist on a timeless classic! This soft, chewy cookie is packed with both semi-sweet and milk chocolate chips, creating the perfect balance of rich and creamy chocolate in every bite. Made with real butter, pure vanilla, and a touch of brown sugar, it’s the ultimate treat for chocolate lovers who want the best of both worlds. One bite, and you’ll see why this double-chocolate delight is a crowd favorite!</p>
                            </div>
                       </div>

                       <div className={`cursor-pointer border-b border-[#ff5227] w-full pb-[1rem] transition-transform ${accordion ? 'h-auto overflow-auto' : 'h-[5rem] overflow-hidden'}`} onClick={() => setAccordion((accordion) => !accordion)}>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-[3rem]'>Shipping</h2>

                            <button type="button" className='border border-[#ff5227] rounded-full p-[.5rem]'><Plus /></button>
                            </div>

                            <div className='pt-[2rem]'>
                                <p>Introducing our Two Chip Chocolate Chip Cookie – a delicious twist on a timeless classic! This soft, chewy cookie is packed with both semi-sweet and milk chocolate chips, creating the perfect balance of rich and creamy chocolate in every bite. Made with real butter, pure vanilla, and a touch of brown sugar, it’s the ultimate treat for chocolate lovers who want the best of both worlds. One bite, and you’ll see why this double-chocolate delight is a crowd favorite!</p>
                            </div>
                       </div> */}
                 </div>
            </div>
            </div>
        ))}
     </div>
  )
}

export default ProductPreview