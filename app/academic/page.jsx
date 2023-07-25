import Link from "next/link";

export default function AcademicPage() {
    return (
      <>
        <h5>Academic</h5>
        <br />

        <blockquote>
          <h6>Undergraduate degree</h6>
          <ul>
            <li style={{listStyle:'none'}}>Information Systems Engineering at <Link href='http://www.frt.utn.edu.ar/' >UTN - FRT.</Link>
            <i> (in progress)</i></li>
          </ul>
        </blockquote>
        <br />
        <blockquote>
          <h6>Relevant courses</h6>
          <ul>
            <li style={{listStyle:'none'}}>Android mobile apps development with Java. <i>(2019)</i></li>
            <li style={{listStyle:'none'}}>Modern web apps development (Full-stack MERN). <i>(2021)</i></li>
          </ul>
        </blockquote>
      </>
    )
  }