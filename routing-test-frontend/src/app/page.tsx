import styles from "./page.module.css";



async function homePageLoader(){

  const path = '/api/home-page';
  const BASE_URL = 'http://localhost:1337';
  const url = new URL(path,BASE_URL);   // builds url from BASE_URL and path

  const response = await fetch(url.href);
  const data = await response.json();   // getting data via default-fetch

  // console.log(data);
  return { ...data.data };    // returns destructured data
}



export default async function HomeRoute() {

  const home = await homePageLoader();  // receive data from homepageloader

  // console.log(home);

  return (
    <div className={styles.page}>
      <h1>{home.title}</h1>
      <p>{home.description}</p>
    </div>
  );    // standard stuff
}
