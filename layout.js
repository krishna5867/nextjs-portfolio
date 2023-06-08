import Navbar from './pages/components/navbar'


const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}



export default layout