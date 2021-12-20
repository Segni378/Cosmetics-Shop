import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    actionArea: {
        transition: '0.2s',
        boxShadow: 'none',
        minWidth: 256,
        backgroundColor: 'gray',
    },
    card: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '&:hover': {
        transform: 'skewY(1.5)',
          },  
       
    },
    content: () => {
        return {
          
            alignContent: 'space-between',
            height: '10rem',
            backgroundColor: '#FFAAA',
          padding: '0.5rem 2rem 1.5rem',
         
        };
       
      },  
    title: {
    
    fontFamily: ['"Playfair Display"', 'serif'].join(','),
    display: 'flex',
    justifyContent:'center',
    // textAlign:'center',
    // alignItems: 'center',
    // fontSize: '2rem',
    
    },
    discription: {
  display: 'flex',
  justifyContent: 'center',
    },
    icons: {
      '&:hover': {
      color:'#FFAAAA',
      },  
    },
    cart:{
      display: 'flex',
      justifyContent: 'center',
    },
    addtocart: {
      overflow:'hidden',
      position:'relative',
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'center',
      color:'#FFAAAA',
   '&:hover': {
   flexdirection: 'row',
    transition: '0.45s',
    transform: 'scale(1.1)',
    backgroundColor: '#FFAAAA',
    //  color: '#000',
   },
    },
   media: {
   height: '350px'
   },
   icon:{
    position:'absolute',
    top:'2px',
    right:'2px',
    color: '#FFAAAA',
  },

}));
