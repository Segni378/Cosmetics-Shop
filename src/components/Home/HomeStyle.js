import { makeStyles } from "@material-ui/core/styles";
import { StyledEngineProvider } from "@material-ui/core/styles";
export default makeStyles((theme) => ({

    liptitle: {
        color: '#CEBDB3',
        fontFamily: 'Keania One',
        fontSize: '2rem',
    },
    lipheder: {
        padding: 0,
        margin: '0.5rem',

    },
    Title: {
        padding: '25px',
        color: '#666',
        fontFamily: `'Playfair Display SC', serif`,
        textTransform: 'uppercase'
    },
    bestseller: {
        margin: '50px auto',
        paddingLeft: '50px',
        flexGrow: 1,
        padding: '20rem 0'
    },
    bestSell_title: {
        padding: '25px',
        color: '#666',
        // fontSize:'40px',
        fontFamily: `'Playfair Display SC', serif`
    },
    skin: {
        //backgroundColor: 'rgb(246,243, 240)',
        // margin: '80px 0',
        marginTop : '50px',
        paddingBottom: '90px'
    },
    eyes: {
        backgroundColor: 'rgb(246,243, 240)',
        paddingTop: '80px',
    },
    hair: {
        //margin:'50px auto',
        paddingBottom: '5rem',
        // marginTop: '200px ',
       // backgroundColor: 'rgb(247,234, 232)',
        paddingTop: '45px',
        marginBottom:'30px'

    },
    brushes: {
        paddingTop: '45px',
        backgroundColor: 'rgb(246,243, 240)'
    },
    lips: {
        paddingTop: '45px',
        //backgroundColor: 'rgb(246,243, 240)',
        paddingBottom:'30px'
    }
}));
