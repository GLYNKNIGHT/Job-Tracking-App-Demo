import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Job from '../Job/Job'
import styles from './Carousel.module.css'

const JobCarousel = ({jobs})=>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };

return <div className={styles.carousel_container}>
    <Carousel
      className={styles.carousel}
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass={styles.job_card}
    >

{jobs.map((job) => <Job key={job.id} 
                              id={job.id} 
                              jobTitle={job.jobTitle} 
                              salary={job.salary}
                              company={job.company} 
                              link={job.link} 
                              applied={job.applied} 
                              interview={job.interview}
                              offer={job.offer}
                              dateApplied={job.dateApplied}
                              notes={job.notes}
                              //handleEdit={handleEdit}
                              notProgressed={job.notProgressed}
                              />)}
</Carousel>;
</div>
}

export default JobCarousel