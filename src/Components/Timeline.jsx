import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(){
    return(
        <VerticalTimeline layout='1-column-left'>
            <VerticalTimelineElement 
                className="vertical-timeline-element"
                contentStyle={{ background: '#FBFBFB', color: '#301D54' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="21 Agustus 2023 - 27 Agustus 2023"
                iconStyle={{ background: '#301D54', color: '#301D54' }}
            >
                <h3 className="fw-bold vertical-timeline-element-title">Coming Soon</h3>
                <p>
                    Penyampaian informasi bahwa Open Recruitment 13 UKM Neo Telemetri akan segera dibuka
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className="vertical-timeline-element"
                contentStyle={{ background: '#FBFBFB', color: '#301D54' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="28 Agustus 2023 - 06 September 2023"
                iconStyle={{ background: '#301D54', color: '#301D54' }}
            >
                <h3 className="fw-bold vertical-timeline-element-title">Registrasi</h3>
                <p>
                    Penyampaian informasi bahwa Open Recruitment 13 UKM Neo Telemetri telah dibuka
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline