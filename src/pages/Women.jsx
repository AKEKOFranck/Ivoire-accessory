import '../styles/Women.css';
import { Link } from 'react-router-dom';
import fond1 from '../assets/bijoux.png';
import fond2 from '../assets/sac.png';
import fond3 from '../assets/lunette.png';
import pic1 from '../assets/b1.jpg';
import pic2 from '../assets/b2.jpg';
import pic3 from '../assets/s1.jpg';
import pic4 from '../assets/s2.jpg';
import pic5 from '../assets/l1.jpg';
import pic6 from '../assets/l2.jpg';

export default function Women() {

    const products1 = [
        {id: 1, name: 'Bijoux 1', price: '2000fcfa', image: pic1},
        {id: 2, name: 'Bijoux 2', price: '2000fcfa', image: pic1},
      
    ];

     const products2 = [
       
        {id: 3, name: 'Bijoux 3', price: '2000fcfa', image: pic1},
        {id: 4, name: 'Bijoux 4', price: '2000fcfa', image: pic2},
       
    ];

     const products3 = [
      
        {id: 5, name: 'Bijoux 5', price: '2000fcfa', image: pic2},
        {id: 6, name: 'Bijoux 6', price: '2000fcfa', image: pic2},
    ];

    const products4 = [
        {id: 7, name: 'Sac 1', price: '4000fcfa', image: pic3},
        {id: 8, name: 'Sac 2', price: '4000fcfa', image: pic3},
       
    ];

     const products5 = [
      
        {id: 9, name: 'Sac 3', price: '4000fcfa', image: pic3},
        {id: 10, name: 'Sac 4', price: '4000fcfa', image: pic4},
       
    ];

     const products6 = [
       
        {id: 11, name: 'Sac 5', price: '4000fcfa', image: pic4},
        {id: 12, name: 'Sac 6', price: '4000fcfa', image: pic4},
    ];

    const products7 = [
        {id: 13, name: 'lunette 1', price: '3000fcfa', image: pic5},
        {id: 14, name: 'lunette 2', price: '3000fcfa', image: pic5},
       
    ];

    
    const products8 = [
     
        {id: 15, name: 'lunette 3', price: '3000fcfa', image: pic5},
        {id: 16, name: 'lunette 4', price: '3000fcfa', image: pic6},
    
    ];

    
    const products9 = [
      
        {id: 17, name: 'lunette 5', price: '3000fcfa', image: pic6},
        {id: 18, name: 'lunette 6', price: '3000fcfa', image: pic6},
    ];

    return(
        <section className='wo_main'>
            <div className='wo_content'>
                <div className='wo_box'>
                    <img src={fond1} alt='bijoux' className='wo_img' />
                </div>
                <div className='wo_box'>
                    <div className='wo_container'>
                        {products1.map((prod1) => (
                            <div className='wo_thing' key={prod1.id}>
                                <img src={prod1.image} alt={prod1.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod1.name}</p>
                                    <p>{prod1.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>



                     <div className='wo_container'>
                        {products2.map((prod2) => (
                            <div className='wo_thing' key={prod2.id}>
                                <img src={prod2.image} alt={prod2.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod2.name}</p>
                                    <p>{prod2.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                     <div className='wo_container'>
                        {products3.map((prod3) => (
                            <div className='wo_thing' key={prod3.id}>
                                <img src={prod3.image} alt={prod3.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod3.name}</p>
                                    <p>{prod3.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='wo_content'>
                <div className='wo_box'>
                    <img src={fond2} alt='sacs' className='wo_img' />
                </div>
                <div className='wo_box'>
                    <div className='wo_container'>
                        {products4.map((prod4) => (
                            <div className='wo_thing' key={prod4.id}>
                                <img src={prod4.image} alt={prod4.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod4.name}</p>
                                    <p>{prod4.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                     <div className='wo_container'>
                        {products5.map((prod5) => (
                            <div className='wo_thing' key={prod5.id}>
                                <img src={prod5.image} alt={prod5.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod5.name}</p>
                                    <p>{prod5.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className='wo_container'>
                        {products6.map((prod6) => (
                            <div className='wo_thing' key={prod6.id}>
                                <img src={prod6.image} alt={prod6.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod6.name}</p>
                                    <p>{prod6.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='wo_content'>
                <div className='wo_box'>
                    <img src={fond3} alt='lunettes' className='wo_img' />
                </div>
                <div className='wo_box'>
                    <div className='wo_container'>
                        {products7.map((prod7) => (
                            <div className='wo_thing' key={prod7.id}>
                                <img src={prod7.image} alt={prod7.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod7.name}</p>
                                    <p>{prod7.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                     <div className='wo_container'>
                        {products8.map((prod8) => (
                            <div className='wo_thing' key={prod8.id}>
                                <img src={prod8.image} alt={prod8.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod8.name}</p>
                                    <p>{prod8.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className='wo_container'>
                        {products9.map((prod9) => (
                            <div className='wo_thing' key={prod9.id}>
                                <img src={prod9.image} alt={prod9.name} className='wo_thing_img' />
                                <div className='wo_text'>
                                    <p>{prod9.name}</p>
                                    <p>{prod9.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}