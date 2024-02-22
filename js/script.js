var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });



  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
  accordion.forEach(acco =>{
   acco.onclick = () =>{
     accordion.forEach(dion => dion.classList.remove('active'))
     acco.classList.toggle('active');
   };
  });

  //accordion
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
      // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      //   currentlyActiveAccordionItemHeader.classList.toggle("active");
      //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      // }
  
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });

  //team members
  function fetch_infor(i){
    let profile=["images/profile_1.jpg","images/profile_2.jpg","images/profile_3.jpg","images/profile_4.jpg","images/profile_5.jpg","images/profile_6.jpg"];
    let name = ["Fr. Mike M. S. Kolala","Nachilala Nkombo","3Joe Band","4Joe Band","5Joe Band","5Joe Band2ws"];
    let status = ["Chaplain, Mpelembe Secondary School – Zambia","Country Director, World Wide Fund for Nature – Zambia ","Board Memmber","Board Memmber","Board Memmber","Board Memmber"];

    let about = ["Fr. Mike is a Chaplain at Mpelembe Secondary School in Kitwe - Zambia. He is a pioneer member of the Pan-African Institute of Research and Innovation and one of the pioneers of the Healing of Memories Institute - Zambia. He holds a Master of Arts in Peace and Conflicts Studies from the Copperbelt University (Zambia), a Diploma in Community-Based Work With Children And Youths (TEVETA – REPSSI), a Certificate in Teaching Methodology (Technical And Vocational Teacher’s College), a Post-Graduate Diploma in Human Rights (University of Zambia), a Bachelor of Arts in Sacred Theology at the Pontifical Urbaniana University (St. Dominic’s Major Seminary), and a Diploma in Philosophy And Religious Studies (St. Augustine Catholic Philosophical College. He is a Seasoned School counsellor with over 15 years of experience as a priest, in youth ministry, pastoral care and spiritual leadership to school, Parish and Deanery apostolates. He has a successful background in professional counseling, organisational leadership, conflict resolution, peacebuilding, youth ministry programmes and youth mission-oriented strategic planning and volunteer programme coordination. As a Pragmatic School Chaplain, he is well vest in Narrative 4, Healing of Memories facilitation, life skills education, family ministry, youth accompaniment, and young couple’s ministry/pastoral care. He previously served as Curate Priest at St. Anthony’s Mission – Mpongwe (2008-2011), Parish Priest of St. Francis – Kalulushi (2011-2013), St. Pius the Tenth Parish – Chililabombwe (2013-2015) and Francisdale Mission and Fatima Girls Secondary School – Fatima (2015-2017) and currently works at Mpelembe Secondary School since 2017. He is currently a member of the Zambia Counselling Council, the Narrative 4 Zambia, a recent past President of the Association of Zambian Diocesan Catholic Clergy (ADZACC) and now a full member of the Chingola Secondary School Alumni (CHiSSA)."
    
    ,
    "Nachilala Nkombo is the Country Director for the World Wide Fund for Nature (WWF) in Zambia. Since joining WWF in 2018, she has led the WWF International conservation strategy in Zambia via a range of innovative science, policy, green finance, and field initiatives aimed at protecting and restoring Zambia’s rich biodiversity and contributing to sustainable  development outcomes. Some of the programmes include the restoration of depleted wildlife species and restoration of degraded forests, the empowerment of communities most affected by climate change and environmental degradation with sustainability knowledge and sustainable livelihoods, and the conservation of critical freshwater resources. Her work involves working with policymakers, business leaders, and community leaders to spearhead national-level sustainable development policy initiatives, as well as green finance initiatives and collective actions to secure and advance Zambia’s sustainable development agenda. Ms. Nkombo is a leading voice on innovations in biodiversity conservation and sustainable agriculture in Zambia and in Africa. She is working alongside UN Biofin Zambia, FMO, ZANACO, ABSA the Zambia Capital Markets Association, the Development Bank of Zambia, and the Zambian Securities and Exchange Commission of Zambia to catalyse a range of green finance instruments in Zambia. These include the green bonds and the SME green outcomes fund. Ms. Nkombo has extensive African experience as former Deputy Director, Africa Director for ONE.org. She also previously served as Africa Regional Coordinator for Action Aid International and Country Director for MS ActionAid Denmark in Zambia. She is an Economist by training and holds a master’s degree in public policy from the University of Potsdam in German. Nachilala has spoken at the World Economic Forum on Africa, the African Green Revolution Forum, the African Public Private Partnerships Network and the Africa Union Agriculture and Trade Ministers Conference, the Open Government Partnership Forum in Africa amongst others. She currently serves on the global WWF Network Executive team, Malabo Montpellier Panel, and serves as board chair for the Lusaka Water Security Initiative board, and as board chair for Mulonga Water and Sewerage Company. Nachilala also spearheaded a partnership with ZANACO and Kukula Capital to develop a Green Outcomes "
  ]

    document.getElementById("profile").src=profile[i];
    document.getElementById("name").innerHTML=name[i];
    document.getElementById("status").innerHTML=status[i];
    document.getElementById("about").innerHTML=about[i];
}

var swiper = new Swiper(".team-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 10,
  breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      1214: {
        slidesPerView: 4,
      },
    },
});