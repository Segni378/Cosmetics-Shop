import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  skinProducts: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '90px',
    width: '100%'
    // maxWidth: '400px'
  },
  cardContent: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: `'Playfair Display', serif`
  },
  skinButton: {
    width: '290px',
    padding: '10px',
    backgroundColor: '#F4B5CC',
    color: '#FFF',
    transition: 'ease-out 0.3s',
    boxShadow: 'inset 0 0 0 0 #FFF',
    outline: 'none',
    border: 'none',
    marginTop: '10px',
    '&:hover' :{
        color : '#F4B5CC',
        boxShadow: 'inset 290px 0 0 0 #FFF',
    }

  },
  skinImages: {
    margin: 'auto',
    width: '100%',
    heigth: '900px',
    objectFit: 'cover'
  },
  skinProductsImage :{
    position: 'relative',
  },
  Favorite: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(240, 239, 234)'
  },
}));
