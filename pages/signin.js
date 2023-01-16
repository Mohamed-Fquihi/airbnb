import cx from 'classnames';
import styles from '../styles/Signin.module.css'
import { useRouter } from "next/dist/client/router"
import Header from '../components/Header';
import Footer from '../components/Footer';



export default Signin;

function Signin() {

  const router = useRouter();

  const Sign = () =>{
    router.push({
      pathname: "/",})}

  return (
    <>

    <Header />

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h2 className="h3 mb-3 fw-normal"> Sign in</h2>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput" className='font-light'>Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label className='font-light' htmlFor="floatingPassword">Password</label>
          </div>

          <div onClick={() => router.push("/")} className=" from-indigo-400 font-light active:to-blue-600 italic underline">
            <label style={styles.underline} className='cursor-pointer '>
               Continue as a guest
            </label>
          </div>
          <div onClick={Sign}>
            <button  className="w-100  bg-red-400 text-white mb-5 mt-1 rounded-md py-2" type="submit">Sign in</button>
          </div>
        </form>
      </main>
<Footer />
    </>
  )
}
