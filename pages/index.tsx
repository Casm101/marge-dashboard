import { Card, Category, ICategory, Service, IService } from '../components';


export default function Home(data: any) {

  const HomeData = data.data[0];

  const generateCategories = (cats: ICategory[]) =>
    cats.map((cat, id) => {
      return (
        <Category
          icon={cat.icon}
          name={cat.name}
          services={cat.services}
          key={id}
        />
      );
    });

  return (
    <>
      <section className="pageSection">
        {/* Message card */}
        <Card title={HomeData.message.title}>{HomeData.message.subtitle}</Card>

        {/* Start of app columns */}
        {generateCategories(HomeData.categories)}
      </section>
    </>
  );
}
