import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '../';
import { StyledServiceBody } from './styles';
import { clearInterval } from 'timers';


export interface IService {
  logo: string;
  name: string;
  info: string;
  url: string;
  status?: boolean | string | number;
}

export const Service = memo<IService>(({logo, name, info, url, status}) => {

  const [currentStatus, setCurrentStatus] = useState("false");

  useEffect(() => {
    let checkServiceStatus = setInterval(async () => {
      if (url && status) {
        const res = await fetch(url);

        // Remove this thing later
        console.log(name, res);
        
        setCurrentStatus(res.ok.toString());
      }
      
    }, 3000);

    console.log(checkServiceStatus);
  }, []);


  return (
    <Link href={url} target="_blank">
      <Card>
        <StyledServiceBody>
          <div className="serviceData">
            <img src={logo} alt="Service icon" />
            <div>
              <p className="serviceName">{name}</p>
              <p className="serviceInfo">{info}</p>
            </div>
          </div>
          {currentStatus && (
            <div className="serviceStatus">
              {currentStatus == "true" ? "active" : "inactive"}
              <div className={"statusIndicator " + currentStatus}></div>
            </div>
          )}
        </StyledServiceBody>
      </Card>
    </Link>
  );
});
