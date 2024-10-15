import React from 'react';
import Layout from '../../layout/Layout';
import '../Blog/Blog.css'
import { Link } from 'react-router-dom';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const Blog = () => {
    return (
        <>
            <Layout>
                <div className="Blog_page-wrap">
                    <header className="Blog_header">
                        <ul className='Blog_header_item'>
                            <li><Link to={"/tulsi"}>Tulsi</Link></li>
                            <li><Link to={"/neem"}>Neem</Link></li>
                            <li><Link to={"/paan"}>Paan</Link></li>
                            <li><Link to={"/tulsi"}>NeemOil</Link></li>
                            <li><Link to={"/tulsi"}>PumpkinOil</Link></li>
                            <li><Link to={"/tulsi"}>Jeera</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>
                            <li><Link to={"/tulsi"}>Milk</Link></li>

                        </ul>                        
                    </header>
                    <div className=" Blog_sidebar Blog_left-sidebar">
                        <nav className="Blog_side-nav">
                            <h2>Share Your Experience</h2>
                            <ul>
                                <li><a href="#">Adusa/Vasaka</a></li>
                                <li><a href="#">Ananas</a></li>
                                <li><a href="#">Babool</a></li>
                                <li><a href="#">Dhaniya</a></li>
                                <li><a href="#">Brahmi</a></li>
                                <li><a href="#">Kalmegh</a></li>
                                <li><a href="#">Lashun</a></li>
                                <li><a href="#">Punarnava</a></li>
                                <li><a href="#">Nagrmotha</a></li>
                                <li><a href="#">Shalparni</a></li>
                                <li><a href="#">Vridhadaru</a></li>
                                <li><a href="#">Tulsi</a></li>
                                <li><a href="#">Agarkasth</a></li>
                                <li><a href="#">Chirchita</a></li>
                                <li><a href="#">Badi Elaichi</a></li>
                                <li><a href="#">Ankol</a></li>
                                <li><a href="#">Kanghi</a></li>
                                <li><a href="#">Pyaj</a></li>
                                <li><a href="#">Neem</a></li>
                                <li><a href="#">Shatavari</a></li>
                                <li><a href="#">Lots of menu items</a></li>
                                <li><a href="#">Yavasa</a></li>
                                <li><a href="#">Ashgandha</a></li>
                                <li><a href="#">Akarkara</a></li>
                                <li><a href="#">Bael</a></li>
                                <li><a href="#">Ghee Kunwar</a></li>
                                <li><a href="#">Palasha</a></li>
                                <li><a href="#">Ketaki</a></li>
                                <li><a href="#">Ratti</a></li>
                                <li><a href="#">Bach</a></li>
                                <li><a href="#">Shirish</a></li>
                                <li><a href="#">Ashok</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="Blog_content_main">
                        <div className="Blog_content">
                            <h2>Main Content</h2>
                            <div id='post-details'>
                                <p>Latest Updates: {new Date().toLocaleString()+""}</p>
                                <div id='like-comment'>
                                <div id='like'><SlLike /></div>
                                <div id='comment'><FaRegComment /></div>
                                <div id='share'><PiDotsThreeVerticalBold /></div>
                                
                            </div>
                        </div>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium eveniet delectus doloribus esse excepturi in doloremque? Inventore magni sed tempora, eaque molestias iure unde delectus ipsum suscipit quo sunt consequatur molestiae dolorem officia ullam quas soluta nulla totam cum. Consequuntur magni cumque necessitatibus incidunt earum modi repellendus nam dolor laboriosam assumenda atque maiores mollitia, corrupti sint totam dolorem ipsa quidem? Voluptates tempora facilis recusandae vel quidem rem pariatur ea nihil asperiores alias rerum vitae explicabo similique, eveniet quisquam, veritatis iusto, minima nostrum. Ex, vel, recusandae suscipit perspiciatis porro illum aspernatur quae quam alias autem corrupti distinctio provident? Aut, consequuntur culpa rerum quis distinctio architecto enim. Repudiandae excepturi maiores nihil, doloremque ullam eos labore sit distinctio recusandae culpa commodi ipsum dolorem iste deserunt nesciunt temporibus consequatur aut. Nemo repellendus exercitationem voluptates accusamus praesentium! Dolorum doloribus expedita adipisci illum repellendus placeat in aspernatur perferendis veniam praesentium ab tempore eveniet quam, a distinctio assumenda qui enim cum dicta voluptatibus obcaecati delectus aliquid. Tempora quidem perferendis iure, est aspernatur deserunt odit voluptas. Sint facilis dolore saepe quas dolorum hic optio error beatae. Iste, excepturi placeat autem blanditiis maiores quos obcaecati quibusdam. Mollitia vel omnis dolor necessitatibus molestias cumque pariatur deleniti rerum. Accusamus quaerat quos necessitatibus reiciendis doloribus! Quo hic reprehenderit, modi, tempore impedit in itaque odit, voluptatem ducimus animi vitae? Ad ipsum nobis quod praesentium suscipit, iusto eveniet, id beatae doloremque, numquam impedit explicabo sapiente. Repellat mollitia obcaecati facere suscipit ipsa, corrupti deleniti veniam ex tenetur voluptatum natus atque quis itaque iusto velit praesentium, nemo, debitis voluptates consequuntur corporis expedita necessitatibus fugiat. Iusto, id sequi saepe quam aut ratione qui repudiandae harum reprehenderit magni praesentium ut earum autem recusandae illo sapiente! Dolorum molestiae suscipit nobis ullam quod. Culpa, fugit! Odio sequi aperiam nostrum, eum quas temporibus quasi rem hic officia excepturi tempore, quos culpa itaque asperiores ab corporis blanditiis? Quo, asperiores iusto reiciendis reprehenderit pariatur commodi nemo eaque deleniti nulla aliquam consequuntur recusandae non aperiam accusantium temporibus dolore cum velit explicabo nam. Iure ipsam maiores vero magnam qui modi commodi consectetur et iusto. Incidunt perferendis magnam repellat. Dicta aspernatur voluptate fugit dignissimos nobis autem, odit, itaque minima expedita unde sequi totam doloribus nihil iure quidem nulla dolorum inventore dolor, atque quibusdam fuga. Illo sint rerum perspiciatis magnam, labore facilis delectus quae in sit consequatur iste quibusdam incidunt nostrum, aliquam dolorum voluptas mollitia quo. Quas laudantium laborum unde eveniet magni in saepe? Ad iusto ut quae modi ea necessitatibus corrupti eveniet, earum eius laborum quidem magnam nam quis nemo sunt eos. Adipisci in numquam ratione nam alias quasi, error vel enim praesentium sit quos eos rerum cupiditate obcaecati quam id assumenda iste aspernatur nesciunt commodi sed. Nulla, eaque ipsum quibusdam inventore error nobis voluptatibus ad voluptates sapiente iste quos dolor facere itaque natus repellat enim nam aperiam tenetur, cupiditate libero fuga nemo consequatur nisi asperiores. Enim aut voluptate nostrum. Eveniet eius aperiam, laborum, sit laudantium natus saepe quis sed similique praesentium officia itaque? Fugiat quae et libero incidunt mollitia debitis voluptatem dolorem animi exercitationem! </p>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id molestiae natus eum, doloribus illo, velit ipsam, soluta voluptatem ex libero aliquam itaque. Culpa exercitationem ad porro veniam! Itaque hic minima vitae ab, magnam unde dicta suscipit rem impedit cupiditate possimus assumenda neque corrupti consequatur commodi harum fugiat, esse ut est ad quis. Dolore, consequatur eveniet id quis fuga ullam totam, amet laborum dignissimos sunt cupiditate voluptates, laboriosam quo voluptatibus vero provident illum similique tempora placeat! Non obcaecati, quidem corrupti suscipit enim itaque velit, asperiores eveniet quas quam exercitationem natus pariatur, quisquam a? Aliquam consectetur inventore ipsam nisi? Earum blanditiis unde esse ipsam quos. Ab suscipit laudantium blanditiis non nesciunt quae consectetur ut quis. Dolorem distinctio ipsum deleniti esse, iusto dignissimos velit at aut enim consequatur voluptates dicta nostrum corporis quibusdam repellendus omnis similique laboriosam. Magnam exercitationem dolore sequi, cupiditate, laboriosam veritatis laborum atque culpa quam officiis neque esse eos vitae distinctio autem consequuntur nemo at dignissimos eligendi dolor sit ipsa beatae. Fugit enim quam necessitatibus ea tempore dolore, saepe nobis praesentium quaerat quis deleniti, eum facere quidem sed nisi quasi temporibus vel ad perferendis. Ipsam ab vel veniam quis praesentium quam, error dicta beatae corporis quia alias ex ut.</p>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, recusandae ex voluptates modi enim quae optio non amet nesciunt neque ea obcaecati porro quo ducimus perspiciatis reiciendis fuga! Amet corrupti quaerat dolor officiis labore aliquam mollitia, sit cum. Animi cupiditate et, aliquid perferendis omnis ex fuga eos? Hic consequuntur expedita enim omnis dicta dolore excepturi ex ea reprehenderit. Alias, architecto aperiam! Assumenda atque quasi doloribus. Consequatur hic quod modi nam beatae dicta debitis magnam fuga perferendis sapiente quae, iusto sunt, eos ratione reiciendis commodi deleniti ab. Optio dolore eaque recusandae maiores obcaecati enim, nam adipisci placeat. Earum nobis iste odit harum aliquid, vero voluptates officiis fuga animi saepe in qui, doloribus incidunt debitis inventore consectetur molestias natus ratione neque reprehenderit ipsum doloremque dolorem. Quaerat nisi ad obcaecati at, tempora possimus commodi a magnam odit architecto molestias rerum minus repudiandae. Facilis esse eaque odit eligendi ducimus, placeat saepe ipsam asperiores, ex quod et odio nulla nemo itaque deserunt nihil sunt, incidunt aperiam enim reiciendis praesentium iusto magnam ad quas. Ex quibusdam alias voluptatibus sed magni aspernatur. Rem porro accusamus aperiam reprehenderit asperiores quo, dolorem, quibusdam laboriosam reiciendis, temporibus repellendus sunt suscipit. Repellat voluptates modi architecto, et sapiente pariatur veritatis, cum quis asperiores nam, commodi repellendus sint. Dolorum perferendis hic repellendus, doloremque iusto est voluptatem atque ipsa consectetur. Saepe molestias deserunt soluta harum illo velit, error quaerat repellat consectetur voluptatem ullam porro sit quod itaque et officia ad alias voluptatibus voluptate consequatur officiis. Adipisci, id temporibus asperiores cumque suscipit, harum veritatis quasi at, iure nam ab hic recusandae? Eveniet aliquam ullam asperiores ab dolor, optio saepe quisquam quis consequatur nesciunt fugiat expedita quidem voluptas ut culpa, nobis debitis. Debitis quisquam voluptate dicta sequi, numquam quod minima omnis aperiam natus veritatis assumenda nisi recusandae necessitatibus impedit consectetur repellat aliquam vel eum nihil totam earum dolor, cupiditate ab enim. Id animi explicabo quia alias, a est doloribus velit unde perferendis quidem minima cumque exercitationem earum ex corporis vero saepe ab commodi! Facere iusto tenetur dignissimos provident! Adipisci non, optio in iure nulla, excepturi, fugit delectus sunt atque voluptatum officia consequatur quae. Fugit amet eius incidunt. Consectetur perferendis suscipit, id illo quibusdam odio libero quisquam rerum error vitae laborum sint ratione mollitia enim esse reiciendis perspiciatis ducimus accusantium harum. Eos quia, temporibus ad maiores impedit eligendi quod totam aliquam rerum iste corporis, omnis blanditiis molestias? Dolorem, vero quas nostrum, illum quasi sint cum vel quam est ad maxime tenetur repudiandae eum amet iure numquam! A pariatur quasi voluptatum iure minima inventore corporis consequuntur voluptates eaque explicabo omnis beatae eveniet impedit obcaecati neque, fugiat magnam tempore ex animi sequi possimus assumenda! Dolore alias, reiciendis voluptatibus aspernatur totam quos, quibusdam possimus quis repudiandae obcaecati, doloribus a tempore eum blanditiis delectus labore officia! Provident pariatur aliquam dicta, esse consectetur voluptatem ut soluta praesentium assumenda libero vero eius. Illo debitis tempora quas, vel eum impedit aut quisquam laudantium ipsam rerum quod vitae voluptatem autem quis, optio commodi! Illum, ipsa, ad tempora amet nihil id quibusdam corporis neque fuga perferendis expedita cumque natus architecto pariatur reprehenderit eligendi optio commodi non sunt soluta magni! Hic totam maxime vero saepe quibusdam possimus cupiditate esse. Dolores deserunt autem velit. Minus iste doloremque exercitationem cumque dicta omnis, provident aperiam sapiente corporis quas officia magni molestiae illum eaque similique neque nemo error quod est modi saepe voluptatem. Molestias sequi in a velit laboriosam, molestiae neque fuga! At dolorem vero optio repellendus in iusto excepturi aspernatur? Voluptate debitis ea eveniet temporibus nobis eos harum tenetur reiciendis similique facilis officiis excepturi soluta laborum mollitia, et quo ullam facere repudiandae beatae blanditiis molestias fugit commodi! Natus reprehenderit impedit tenetur fugiat, deserunt ex aspernatur, consequatur dignissimos iste nemo quasi. Accusantium, aliquam! Assumenda aliquam sapiente vero distinctio hic blanditiis mollitia molestias facere quasi in ex adipisci debitis aspernatur culpa, nobis, excepturi amet maxime dignissimos quisquam. Doloribus nisi ipsam sequi, nobis dolor consequuntur ut dicta eligendi voluptates labore odio laudantium praesentium, voluptate, consectetur culpa assumenda numquam alias dolore sed molestiae. Perspiciatis incidunt dolorum esse modi soluta eum vero, natus labore dicta. Mollitia nulla exercitationem cum eum maiores, ducimus rem ut facilis vero dignissimos. Sapiente at magni aut vero ullam, rem illum, possimus molestias cum impedit natus error quasi minus enim mollitia quisquam corrupti delectus aspernatur quidem asperiores culpa eaque odio praesentium quos. Molestiae quia dicta modi minima, quos optio qui sequi repudiandae commodi quibusdam necessitatibus a ut, autem, ducimus asperiores quis corrupti voluptatem repellendus molestias ratione. Adipisci ex illum vitae quaerat expedita, ullam recusandae ipsum facere repellendus optio, odio cumque ratione tempore explicabo eius, quasi sapiente porro provident totam labore. Veritatis incidunt vel consequatur perspiciatis mollitia accusamus rem eos deserunt explicabo, laboriosam animi laborum repudiandae asperiores facilis obcaecati excepturi eum fugiat modi pariatur doloribus amet neque rerum. Dicta odio magnam molestias tempora! Dicta nemo eos ut! Earum sint inventore repellat voluptatum provident cumque laudantium quas hic obcaecati autem, perferendis quibusdam harum quis debitis. Magni suscipit maiores quasi amet ut quibusdam rem inventore voluptas debitis animi veniam nam illum quam ratione at ipsum tempora placeat consectetur dolores similique autem deserunt, minus delectus? Placeat, dolores repudiandae? Pariatur aliquid laudantium nam officia repellat itaque perferendis blanditiis aut sed, ducimus possimus, nostrum praesentium. Commodi vero praesentium similique quas id fugiat voluptas possimus dolorem harum voluptatum debitis repellat, eius provident voluptates accusamus omnis repudiandae, cumque voluptatem cum ex aperiam voluptate! Ratione enim dolorum at repudiandae odit eligendi voluptate amet! Placeat ipsum, esse sint iste beatae libero voluptates tempore veritatis quidem modi non voluptatem error ut eaque odit nesciunt provident doloremque exercitationem et? Exercitationem quibusdam recusandae nemo est ullam? Unde nulla consectetur perferendis earum labore, ratione veniam voluptatum eius nemo? Incidunt quod corporis nulla eius sequi beatae consectetur libero, pariatur dolore voluptatibus laudantium! Quibusdam, autem ipsam beatae harum odio doloremque natus praesentium porro temporibus error soluta fugit ipsa minima laudantium quia. Cumque doloribus voluptas dolores excepturi temporibus officiis inventore iusto veritatis modi, ut iste magni odit non quia nulla totam tenetur libero fugiat animi dolorem harum labore amet necessitatibus? Ipsam, asperiores. Optio nostrum ipsum asperiores minus voluptate! main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id molestiae natus eum, doloribus illo, velit ipsam, soluta voluptatem ex libero aliquam itaque. Culpa exercitationem ad porro veniam! Itaque hic minima vitae ab, magnam unde dicta suscipit rem impedit cupiditate possimus assumenda neque corrupti consequatur commodi harum fugiat, esse ut est ad quis. Dolore, consequatur eveniet id quis fuga ullam totam, amet laborum dignissimos sunt cupiditate voluptates, laboriosam quo voluptatibus vero provident illum similique tempora placeat! Non obcaecati, quidem corrupti suscipit enim itaque velit, asperiores eveniet quas quam exercitationem natus pariatur, quisquam a? Aliquam consectetur inventore ipsam nisi? Earum blanditiis unde esse ipsam quos. Ab suscipit laudantium blanditiis non nesciunt quae consectetur ut quis. Dolorem distinctio ipsum deleniti esse, iusto dignissimos velit at aut enim consequatur voluptates dicta nostrum corporis quibusdam repellendus omnis similique laboriosam. Magnam exercitationem dolore sequi, cupiditate, laboriosam veritatis laborum atque culpa quam officiis neque esse eos vitae distinctio autem consequuntur nemo at dignissimos eligendi dolor sit ipsa beatae. Fugit enim quam necessitatibus ea tempore dolore, saepe nobis praesentium quaerat quis deleniti, eum facere quidem sed nisi quasi temporibus vel ad perferendis. Ipsam ab vel veniam quis praesentium quam, error dicta beatae corporis quia alias ex ut.</p>
                            <p>main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : main content goes here : </p>
                        </div>
                        <div className='Blog_Right'>
                            <img src='https://images.unsplash.com/photo-1669574753106-28167b097433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVlbSUyMGxlYWZ8ZW58MHx8MHx8fDA%3D' alt='img' />
                            <h1>hlo</h1>
                            <img src='https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXl1cnZlZGElMjBtZWRpY2VufGVufDB8fDB8fHww' alt='img' />
                            <h1>hlo</h1>
                            <img src='https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXl1cnZlZGElMjBtZWRpY2VufGVufDB8fDB8fHww' alt='img' />
                            <h1>hlo</h1>
                            <img src='https://images.unsplash.com/photo-1706861308984-3ff2525ff468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF5dXJ2ZWRhJTIwbWVkaWNlbnxlbnwwfHwwfHx8MA%3D%3D' alt='img' />
                            <h1>hlo</h1>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    );
}

export default Blog;