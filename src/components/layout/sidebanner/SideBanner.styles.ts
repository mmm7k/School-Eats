import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 730px;
  width: 285px;
  background-color: #f9f9f9;
  margin-right: 50px;
  margin-top: 85px;
  border-radius: 18px;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 27px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const Title = styled.div`
  width: 260px;
  height: 56px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #2e2e2e;
  line-height: 1.4;
`;

export const Image = styled.div`
  height: 182px;
  width: 270px;
  background-image: url('/sidebannerimage.png');
  background-size: cover;
  border-radius: 18px;
`;

export const Gif = styled.div`
  width: 260px;
  height: 280px;
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
`;

export const TagWrapper = styled.div`
  width: 260px;
  height: 120px;
  color: #060606;

  margin-top: 22px;
`;

export const TagLine = styled.div`
  width: auto;
  height: calc(114px / 3);
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.div`
  border-radius: 18px;
  width: auto;
  height: 33px;
  border: 1px solid #bdbdbd;
  color: #6e6e6e;
  font-size: 13px;
  font-weight: 500;
  padding: 8px;
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
