import styled from "@emotion/styled";

export const StyledCustomers = styled.div`
  padding: 100px 15vw 182px;
  text-align: center;
  background-color: #f3f1e7;
 
  h4 {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: rgba(36, 40, 41, 0.5);
    margin: 42px 0 40px;
  }
  p {
    font-weight: 500;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #242829;
  }
`;

export const StyledCustomersContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;

`;
export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: pointer;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: rgba(36, 40, 41, 0.5);
  }
`;

export const StyledCustomer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  width:230px ;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 8px;
  }
  p {
    font-weight: 400 !important;
    font-size: 20px !important;
    line-height: 23px !important;
    color: rgba(36, 40, 41, 0.5) !important;
  }
`;
export const StyledCustomerImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #810102;
  overflow: hidden;
  margin-bottom: 56px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
