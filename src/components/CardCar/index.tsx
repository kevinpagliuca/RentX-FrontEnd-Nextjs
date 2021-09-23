import { CarContainer, Content} from "./styles";
import { LightningIcon } from "../../assets/Icons";
export const CardCar = () => {
  return (
    <CarContainer>
      
       <Content>
            
           <h1>
                Audi
                <p>
                     RS 5 Coupé
                </p>
                Ao dia
                <p className="red">
                     R$ 350
                </p>
           </h1>
          <span>
          <LightningIcon/>
          </span>
              
          
       </Content>
             
          
         
     
    </CarContainer>
  );
};
