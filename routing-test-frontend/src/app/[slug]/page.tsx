import styles from "../page.module.css";



interface DynamicPageProps{
    params: Promise<{ slug: string }>;
}



async function dynamicPageLoader(slug: string){

  const path = '/api/pages';
  const BASE_URL = 'http://localhost:1337';
  const url = new URL(path,BASE_URL);   // creates url


  url.search = new URLSearchParams({
    'filters[slug][$eq]': slug,
  }).toString();    // filters results by slug 

  const response = await fetch(url.href);
  const data = await response.json();

  // console.log(data);
  return { ...data.data[0]};    // ...data.data[0] because of the received datastructure. data needs to be destructured like seen here to be handled efficiently. can be seen and tested using the console.logs above here and below in DynamicPage()
}



export default async function DynamicPage({
  params,
}: DynamicPageProps) {

  const slug = (await params).slug; // creates slug from url-param

  const data = await dynamicPageLoader(slug);   // awaits data from pageloader function

    // console.log(data);
    // console.log(slug);
 
  return (
    <div className={styles.page}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

    </div>
  )
}