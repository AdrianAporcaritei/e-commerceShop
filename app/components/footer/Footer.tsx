import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import {MdFacebook} from 'react-icons/md'
import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
                    <Link href='#'>Phones</Link>
                    <Link href='#'>Laptops</Link>
                    <Link href='#'>Desktop</Link>
                    <Link href='#'>Watches</Link>
                    <Link href='#'>TVs</Link>
                    <Link href='#'>Accessories</Link>
                </FooterList>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Customers Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>Opening the parcel upon delivery</Link>
                    <Link href='#'>30 days right of return</Link>
                    <Link href='#'>Guarantees and service</Link>
                    <Link href='#'>Black Friday e-KraTech</Link>
                    
                </FooterList>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>About US</h3>
                    <Link href='#'>About Us</Link>
                    <Link href='#'>Terms and conditions</Link>
                    <Link href='#'>Processing of personal data</Link>
                    <Link href='#'>Cookies policy</Link>
                    <p>&copy; {new Date().getFullYear()} E~TechShop. All rights reserved</p>
                </FooterList>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Follow US</h3>
                    <div className='flex gap-2'>
                        <Link href="#"><MdFacebook size={24}/></Link>
                        <Link href="#"><AiFillTwitterCircle size={24}/></Link>
                        <Link href="#"><AiFillInstagram size={24}/></Link>
                        <Link href="#"><AiFillYoutube size={24}/></Link>
                    </div>
                </FooterList>

            </div>
        </Container>
    </footer>
  )
}

export default Footer