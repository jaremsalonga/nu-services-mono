import React from 'react'
import '../../css/GraduatingTables.css'

const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <div>
            <label>
                <input type="radio"
                    checked={checked == value}
                    onChange={() => setter(value)} />
                <span>{label}</span>
            </label></div>
    );
};

const GraduatingTables = props => {
    // INSTILLED VALUES
    const [integrity, setIntegrity] = React.useState();
    const [compassion, setCompassion] = React.useState();
    const [innovation, setInnovation] = React.useState();
    const [industry, setIndustry] = React.useState();
    const [respect, setRespect] = React.useState();
    const [resilience, setResilience] = React.useState();
    const [patriotism, setPatriotism] = React.useState();

    //Skills
    const [theorical, setTheorical] = React.useState();
    const [special, setSpecial] = React.useState();
    const [issues, setIssues] = React.useState();
    const [global_comp, setGlobalComp] = React.useState();

    //Other Areas
    const [course_relevance, setCourseRelevance] = React.useState();
    const [tuition, setTuition] = React.useState();
    const [facility, setFacility] = React.useState();
    const [faculty, setFaculty] = React.useState();
    const [support, setSupport] = React.useState();

    //Services
    const [accounting, setAccounting] = React.useState();
    const [admission, setAdmission] = React.useState();
    const [exchange, setExchange] = React.useState();
    const [canteen, setCanteen] = React.useState();
    const [dean_office, setDeanOffice] = React.useState();
    const [discipline, setDiscipline] = React.useState();
    const [guidance, setGuidance] = React.useState();
    const [itro, setItro] = React.useState();
    const [laboratory, setLaboratory] = React.useState();
    const [library, setLibrary] = React.useState();
    const [student_affair, setStudentAffair] = React.useState();
    const [registrar, setRegistrar] = React.useState();
    const [security, setSecurity] = React.useState();
    const [maintenance, setMaintenance] = React.useState();

    return (
        <div>
            <div className="graduating-values">
                <div className="graduating-values-container">

                    {/* Instilled Values */}
                    <div className="graduating-instilled">
                        <div className="graduating-header">
                            <ul>
                                <li></li>
                                <li>Very Satisfactory</li>
                                <li>Satisfactory</li>
                                <li>Fair</li>
                                <li>Poor</li>
                                <li>Very Poor</li>
                            </ul>
                        </div>
                        <div className="qq1">
                            <label className="qq-integ">Integrity</label>
                            <div className="radiobtn-values">
                                <ul>

                                    <li><RadioInput value="very_satisfactory" checked={integrity} setter={setIntegrity} /></li>
                                    <li><RadioInput value="satisfactory" checked={integrity} setter={setIntegrity} /></li>
                                    <li><RadioInput value="fair" checked={integrity} setter={setIntegrity} /></li>
                                    <li><RadioInput value="poor" checked={integrity} setter={setIntegrity} /></li>
                                    <li><RadioInput value="very_poor" checked={integrity} setter={setIntegrity} /></li>

                                </ul>

                            </div>
                        </div>
                        <div className="qq2">
                            <label className="qq-compassion">Compassion</label>
                            <div className="radiobtn-values-comp">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={compassion} setter={setCompassion} /></li>
                                    <li><RadioInput value="satisfactory" checked={compassion} setter={setCompassion} /></li>
                                    <li><RadioInput value="fair" checked={compassion} setter={setCompassion} /></li>
                                    <li><RadioInput value="poor" checked={compassion} setter={setCompassion} /></li>
                                    <li><RadioInput value="very_poor" checked={compassion} setter={setCompassion} /></li>
                                </ul>

                            </div>

                        </div>
                        <div className="qq1">
                            <label className="qq-compassion">Innovation</label>
                            <div className="radiobtn-values-inovv">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={innovation} setter={setInnovation} /></li>
                                    <li><RadioInput value="satisfactory" checked={innovation} setter={setInnovation} /></li>
                                    <li><RadioInput value="fair" checked={innovation} setter={setInnovation} /></li>
                                    <li><RadioInput value="poor" checked={innovation} setter={setInnovation} /></li>
                                    <li><RadioInput value="very_poor" checked={innovation} setter={setInnovation} /></li>
                                </ul>

                            </div>

                        </div>
                        <div className="qq2">
                            <label className="qq-compassion">Industry</label>
                            <div className="radiobtn-values">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={industry} setter={setIndustry} /></li>
                                    <li><RadioInput value="satisfactory" checked={industry} setter={setIndustry} /></li>
                                    <li><RadioInput value="fair" checked={industry} setter={setIndustry} /></li>
                                    <li><RadioInput value="poor" checked={industry} setter={setIndustry} /></li>
                                    <li><RadioInput value="very_poor" checked={industry} setter={setIndustry} /></li>
                                </ul>
                            </div>

                        </div>
                        <div className="qq1">
                            <label className="qq-compassion">Respect</label>
                            <div className="radiobtn-values">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={respect} setter={setRespect} /></li>
                                    <li><RadioInput value="satisfactory" checked={respect} setter={setRespect} /></li>
                                    <li><RadioInput value="fair" checked={respect} setter={setRespect} /></li>
                                    <li><RadioInput value="poor" checked={respect} setter={setRespect} /></li>
                                    <li><RadioInput value="very_poor" checked={respect} setter={setRespect} /></li>
                                </ul>
                            </div>

                        </div>
                        <div className="qq2">
                            <label className="qq-compassion">Resilience</label>
                            <div className="radiobtn-values-res">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={resilience} setter={setResilience} /></li>
                                    <li><RadioInput value="satisfactory" checked={resilience} setter={setResilience} /></li>
                                    <li><RadioInput value="fair" checked={resilience} setter={setResilience} /></li>
                                    <li><RadioInput value="poor" checked={resilience} setter={setResilience} /></li>
                                    <li><RadioInput value="very_poor" checked={resilience} setter={setResilience} /></li>
                                </ul>
                            </div>

                        </div>
                        <div className="qq1">
                            <label className="qq-compassion">Patriotism</label>
                            <div className="radiobtn-values-pat">
                                <ul>
                                    <li><RadioInput value="very_satisfactory" checked={patriotism} setter={setPatriotism} /></li>
                                    <li><RadioInput value="satisfactory" checked={patriotism} setter={setPatriotism} /></li>
                                    <li><RadioInput value="fair" checked={patriotism} setter={setPatriotism} /></li>
                                    <li><RadioInput value="poor" checked={patriotism} setter={setPatriotism} /></li>
                                    <li><RadioInput value="very_poor" checked={patriotism} setter={setPatriotism} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills */}
            
            <div className="graduating-skill-name"><h3>Development of Professional Skills (on your area of discipline)</h3></div>
            <div className="graduating-skills-container">
                <div className="graduating-skill">
                    <div className="graduating-header">
                        <ul>
                            <li></li>
                            <li>Very Satisfactory</li>
                            <li>Satisfactory</li>
                            <li>Fair</li>
                            <li>Poor</li>
                            <li>Very Poor</li>
                        </ul>
                    </div>
                    <div className="qq1">
                        <label className="qq-theorical">Theoretical Knowledge</label>
                        <div className="radiobtn-theorical">
                            <ul>

                                <li><RadioInput value="very_satisfactory" checked={theorical} setter={setTheorical} /></li>
                                <li><RadioInput value="satisfactory" checked={theorical} setter={setTheorical} /></li>
                                <li><RadioInput value="fair" checked={theorical} setter={setTheorical} /></li>
                                <li><RadioInput value="poor" checked={theorical} setter={setTheorical} /></li>
                                <li><RadioInput value="very_poor" checked={theorical} setter={setTheorical} /></li>

                            </ul>

                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-area">Skills in Area (Specialization)</label>
                        <div className="radiobtn-values-special">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={special} setter={setSpecial} /></li>
                                <li><RadioInput value="satisfactory" checked={special} setter={setSpecial} /></li>
                                <li><RadioInput value="fair" checked={special} setter={setSpecial} /></li>
                                <li><RadioInput value="poor" checked={special} setter={setSpecial} /></li>
                                <li><RadioInput value="very_poor" checked={special} setter={setSpecial} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq1">
                        <label className="qq-trends">Updates on Current Issues</label>
                        <div className="radiobtn-values-issues">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={issues} setter={setIssues} /></li>
                                <li><RadioInput value="satisfactory" checked={issues} setter={setIssues} /></li>
                                <li><RadioInput value="fair" checked={issues} setter={setIssues} /></li>
                                <li><RadioInput value="poor" checked={issues} setter={setIssues} /></li>
                                <li><RadioInput value="very_poor" checked={issues} setter={setIssues} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq2">
                        <label className="qq-global">Global Competitiveness</label>
                        <div className="radiobtn-global">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={global_comp} setter={setGlobalComp} /></li>
                                <li><RadioInput value="satisfactory" checked={global_comp} setter={setGlobalComp} /></li>
                                <li><RadioInput value="fair" checked={global_comp} setter={setGlobalComp} /></li>
                                <li><RadioInput value="poor" checked={global_comp} setter={setGlobalComp} /></li>
                                <li><RadioInput value="very_poor" checked={global_comp} setter={setGlobalComp} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Areas */}
            <div className="graduating-other-name"><h3>Other Areas</h3></div>
            <div className="graduating-skills-container">
                <div className="graduating-skill">
                    <div className="graduating-header">
                        <ul>
                            <li></li>
                            <li>Very Satisfactory</li>
                            <li>Satisfactory</li>
                            <li>Fair</li>
                            <li>Poor</li>
                            <li>Very Poor</li>
                        </ul>
                    </div>
                    <div className="qq1">
                        <label className="qq-course">Course Curriculum/ Relevance of Content</label>
                        <div className="radiobtn-values-course">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={course_relevance} setter={setCourseRelevance} /></li>
                                <li><RadioInput value="satisfactory" checked={course_relevance} setter={setCourseRelevance} /></li>
                                <li><RadioInput value="fair" checked={course_relevance} setter={setCourseRelevance} /></li>
                                <li><RadioInput value="poor" checked={course_relevance} setter={setCourseRelevance} /></li>
                                <li><RadioInput value="very_poor" checked={course_relevance} setter={setCourseRelevance} /></li>

                            </ul>

                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-tuition">Tuition and Miscellaneous Fees</label>
                        <div className="radiobtn-values-tuition">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={tuition} setter={setTuition} /></li>
                                <li><RadioInput value="satisfactory" checked={tuition} setter={setTuition} /></li>
                                <li><RadioInput value="fair" checked={tuition} setter={setTuition} /></li>
                                <li><RadioInput value="poor" checked={tuition} setter={setTuition} /></li>
                                <li><RadioInput value="very_poor" checked={tuition} setter={setTuition} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq1">
                        <label className="qq-facility">Facilities and Equipment</label>
                        <div className="radiobtn-values-facility">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={facility} setter={setFacility} /></li>
                                <li><RadioInput value="satisfactory" checked={facility} setter={setFacility} /></li>
                                <li><RadioInput value="fair" checked={facility} setter={setFacility} /></li>
                                <li><RadioInput value="poor" checked={facility} setter={setFacility} /></li>
                                <li><RadioInput value="very_poor" checked={facility} setter={setFacility} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq2">
                        <label className="qq-faculty">Faculty/Teaching Effectiveness</label>
                        <div className="radiobtn-values-faculty">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={faculty} setter={setFaculty} /></li>
                                <li><RadioInput value="satisfactory" checked={faculty} setter={setFaculty} /></li>
                                <li><RadioInput value="fair" checked={faculty} setter={setFaculty} /></li>
                                <li><RadioInput value="poor" checked={faculty} setter={setFaculty} /></li>
                                <li><RadioInput value="very_poor" checked={faculty} setter={setFaculty} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-support">Support from the Administration/ Management</label>
                        <div className="radiobtn-values-support">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={support} setter={setSupport} /></li>
                                <li><RadioInput value="satisfactory" checked={support} setter={setSupport} /></li>
                                <li><RadioInput value="fair" checked={support} setter={setSupport} /></li>
                                <li><RadioInput value="poor" checked={support} setter={setSupport} /></li>
                                <li><RadioInput value="very_poor" checked={support} setter={setSupport} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Provided by the following offices */}
            <div className="graduating-services-name"><h3>Services provided by the following offices</h3></div>
            <div className="graduating-skills-container">
                <div className="graduating-skill">
                    <div className="graduating-header">
                        <ul>
                            <li></li>
                            <li>Very Satisfactory</li>
                            <li>Satisfactory</li>
                            <li>Fair</li>
                            <li>Poor</li>
                            <li>Very Poor</li>
                        </ul>
                    </div>
                    <div className="qq1">
                        <label className="qq-accounting">Accounting</label>
                        <div className="radiobtn-accounting">
                            <ul>

                                <li><RadioInput value="very_satisfactory" checked={accounting} setter={setAccounting} /></li>
                                <li><RadioInput value="satisfactory" checked={accounting} setter={setAccounting} /></li>
                                <li><RadioInput value="fair" checked={accounting} setter={setAccounting} /></li>
                                <li><RadioInput value="poor" checked={accounting} setter={setAccounting} /></li>
                                <li><RadioInput value="very_poor" checked={accounting} setter={setAccounting} /></li>

                            </ul>

                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-admission">Admission</label>
                        <div className="radiobtn-values-admission">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={admission} setter={setAdmission} /></li>
                                <li><RadioInput value="satisfactory" checked={admission} setter={setAdmission} /></li>
                                <li><RadioInput value="fair" checked={admission} setter={setAdmission} /></li>
                                <li><RadioInput value="poor" checked={admission} setter={setAdmission} /></li>
                                <li><RadioInput value="very_poor" checked={admission} setter={setAdmission} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq1">
                        <label className="qq-exchange">Bulldogs Exchange</label>
                        <div className="radiobtn-values-exchange">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={exchange} setter={setExchange} /></li>
                                <li><RadioInput value="satisfactory" checked={exchange} setter={setExchange} /></li>
                                <li><RadioInput value="fair" checked={exchange} setter={setExchange} /></li>
                                <li><RadioInput value="poor" checked={exchange} setter={setExchange} /></li>
                                <li><RadioInput value="very_poor" checked={exchange} setter={setExchange} /></li>
                            </ul>

                        </div>

                    </div>
                    <div className="qq2">
                        <label className="qq-canteen">Canteen</label>
                        <div className="radiobtn-canteen">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={canteen} setter={setCanteen} /></li>
                                <li><RadioInput value="satisfactory" checked={canteen} setter={setCanteen} /></li>
                                <li><RadioInput value="fair" checked={canteen} setter={setCanteen} /></li>
                                <li><RadioInput value="poor" checked={canteen} setter={setCanteen} /></li>
                                <li><RadioInput value="very_poor" checked={canteen} setter={setCanteen} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-dean">Dean's Office</label>
                        <div className="radiobtn-dean">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={dean_office} setter={setDeanOffice} /></li>
                                <li><RadioInput value="satisfactory" checked={dean_office} setter={setDeanOffice} /></li>
                                <li><RadioInput value="fair" checked={dean_office} setter={setDeanOffice} /></li>
                                <li><RadioInput value="poor" checked={dean_office} setter={setDeanOffice} /></li>
                                <li><RadioInput value="very_poor" checked={dean_office} setter={setDeanOffice} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-discipline">Discipline Office</label>
                        <div className="radiobtn-discipline">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={discipline} setter={setDiscipline} /></li>
                                <li><RadioInput value="satisfactory" checked={discipline} setter={setDiscipline} /></li>
                                <li><RadioInput value="fair" checked={discipline} setter={setDiscipline} /></li>
                                <li><RadioInput value="poor" checked={discipline} setter={setDiscipline} /></li>
                                <li><RadioInput value="very_poor" checked={discipline} setter={setDiscipline} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-guidance">Guidance</label>
                        <div className="radiobtn-guidance">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={guidance} setter={setGuidance} /></li>
                                <li><RadioInput value="satisfactory" checked={guidance} setter={setGuidance} /></li>
                                <li><RadioInput value="fair" checked={guidance} setter={setGuidance} /></li>
                                <li><RadioInput value="poor" checked={guidance} setter={setGuidance} /></li>
                                <li><RadioInput value="very_poor" checked={guidance} setter={setGuidance} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-itro">ITRO</label>
                        <div className="radiobtn-itro">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={itro} setter={setItro} /></li>
                                <li><RadioInput value="satisfactory" checked={itro} setter={setItro} /></li>
                                <li><RadioInput value="fair" checked={itro} setter={setItro} /></li>
                                <li><RadioInput value="poor" checked={itro} setter={setItro} /></li>
                                <li><RadioInput value="very_poor" checked={itro} setter={setItro} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-laboratory">Laboratory</label>
                        <div className="radiobtn-laboratory">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={laboratory} setter={setLaboratory} /></li>
                                <li><RadioInput value="satisfactory" checked={laboratory} setter={setLaboratory} /></li>
                                <li><RadioInput value="fair" checked={laboratory} setter={setLaboratory} /></li>
                                <li><RadioInput value="poor" checked={laboratory} setter={setLaboratory} /></li>
                                <li><RadioInput value="very_poor" checked={laboratory} setter={setLaboratory} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-library">Library</label>
                        <div className="radiobtn-library">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={library} setter={setLibrary} /></li>
                                <li><RadioInput value="satisfactory" checked={library} setter={setLibrary} /></li>
                                <li><RadioInput value="fair" checked={library} setter={setLibrary} /></li>
                                <li><RadioInput value="poor" checked={library} setter={setLibrary} /></li>
                                <li><RadioInput value="very_poor" checked={library} setter={setLibrary} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-student">Student Affairs</label>
                        <div className="radiobtn-student">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={student_affair} setter={setStudentAffair} /></li>
                                <li><RadioInput value="satisfactory" checked={student_affair} setter={setStudentAffair} /></li>
                                <li><RadioInput value="fair" checked={student_affair} setter={setStudentAffair} /></li>
                                <li><RadioInput value="poor" checked={student_affair} setter={setStudentAffair} /></li>
                                <li><RadioInput value="very_poor" checked={student_affair} setter={setStudentAffair} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-registrar">Registrar</label>
                        <div className="radiobtn-registrar">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={registrar} setter={setRegistrar} /></li>
                                <li><RadioInput value="satisfactory" checked={registrar} setter={setRegistrar} /></li>
                                <li><RadioInput value="fair" checked={registrar} setter={setRegistrar} /></li>
                                <li><RadioInput value="poor" checked={registrar} setter={setRegistrar} /></li>
                                <li><RadioInput value="very_poor" checked={registrar} setter={setRegistrar} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq1">
                        <label className="qq-security">Security</label>
                        <div className="radiobtn-security">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={security} setter={setSecurity} /></li>
                                <li><RadioInput value="satisfactory" checked={security} setter={setSecurity} /></li>
                                <li><RadioInput value="fair" checked={security} setter={setSecurity} /></li>
                                <li><RadioInput value="poor" checked={security} setter={setSecurity} /></li>
                                <li><RadioInput value="very_poor" checked={security} setter={setSecurity} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="qq2">
                        <label className="qq-maintenance">Maintenance/Janitorial Services</label>
                        <div className="radiobtn-maintenance">
                            <ul>
                                <li><RadioInput value="very_satisfactory" checked={maintenance} setter={setMaintenance} /></li>
                                <li><RadioInput value="satisfactory" checked={maintenance} setter={setMaintenance} /></li>
                                <li><RadioInput value="fair" checked={maintenance} setter={setMaintenance} /></li>
                                <li><RadioInput value="poor" checked={maintenance} setter={setMaintenance} /></li>
                                <li><RadioInput value="very_poor" checked={maintenance} setter={setMaintenance} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraduatingTables