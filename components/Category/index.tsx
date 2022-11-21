import { memo } from 'react';
import { Service, IService } from '../';
import { StyledCategory } from './styles';


export interface ICategory {
  icon: string;
  name: string;
  services: IService[]
}

export const Category = memo<ICategory>(({icon, name, services}) => {

  const generateServices = (catServices: IService[]) =>
    catServices.map((service, id) => {
      return (
        <Service
          logo={service.logo}
          name={service.name}
          info={service.info}
          url={service.url}
          status={service.status}
          key={id}
        />
      );
    });

  return (
    <StyledCategory>
      <h2>{icon} {name}</h2>

      <div className='servicesList'>
        {generateServices(services)}
      </div>
    </StyledCategory>
  );
});