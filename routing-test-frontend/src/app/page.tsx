import styles from "./page.module.css";

async function homePageLoader(){

  const path = '/api/home-page';
  const BASE_URL = 'http://localhost:1337';
  const url = new URL(path,BASE_URL); 

  const response = await fetch(url.href);
  const data = await response.json();

  // console.log(data);
  return { ...data.data };
}

export default async function HomeRoute() {

  const home = await homePageLoader();

  // console.log(home);

  return (
    <div className={styles.page}>
      <h1>{home.title}</h1>
      <p>{home.description}</p>
    </div>
  );
}
