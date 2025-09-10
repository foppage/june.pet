import {Component} from "solid-js";
import {data} from './data';

export const Projects: Component = () => {
    return (
        <>
            <h2 class="text-blue">projects</h2>
            {data.map(project => {
                if (project.show) return (
                    <>
                        <h4 class="text-pink">{project.link
                            ? <a class="text-pink" href={project.link}>{project.name}</a>
                            : project.name
                        }</h4>

                        <p>{project.description}</p>
                        {project.timeframe && <p><i>{project.timeframe}</i></p>}
                    </>
                )
            })}
        </>
    );
}