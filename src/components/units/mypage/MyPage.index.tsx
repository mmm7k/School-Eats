import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Pay, PayList, SubTitle, Title, Wrapper } from './MyPage.styles';
import { authInstance, db } from '../../../../pages/_app';
import { useEffect, useState } from 'react';

interface Payment {
  id: string;
  merchant_uid?: string;
  name?: string;
  paid_amount?: number;
  timestamp: Date;
}

export default function MyPage(): JSX.Element {
  const [payments, setPayments] = useState<Payment[]>([]);
  const user = authInstance.currentUser;
  const email = user?.email;
  useEffect(() => {
    const getPayments = async () => {
      if (email) {
        const q = query(collection(db, 'payment'), orderBy('timestamp', 'desc'), where('buyer_email', '==', email));
        const snapshot = await getDocs(q);
        const payArr: Payment[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            timestamp: data.timestamp.toDate(), // Firestore 타임스탬프를 JavaScript Date 객체로 변환
          };
        });
        setPayments(payArr);
      }
    };
    getPayments();
  }, [email]);

  return (
    <Wrapper>
      <Title>마이페이지</Title>
      <SubTitle>결제내역</SubTitle>
      <PayList>
        <Pay>결제번호</Pay>
        <Pay>결제내용</Pay>
        <Pay>결제금액</Pay>
        <Pay>결제일시</Pay>
      </PayList>
      {payments.map((payment: Payment) => (
        <PayList key={payment.id}>
          <Pay>{payment.merchant_uid}</Pay>
          <Pay>{payment.name}</Pay>
          <Pay>{payment.paid_amount}</Pay>
          <Pay>
            {payment.timestamp.toString()} {/* JavaScript Date 객체로 변환된 날짜를 사용 */}
          </Pay>
        </PayList>
      ))}
    </Wrapper>
  );
}
