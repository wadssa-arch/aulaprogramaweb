document.addEventListener('DOMContentLoaded',() =>{

    const toggleMenu = () =>{
        const menu = document.getElementById('navMenu');
        if(menu)menu.classList.toggle('active');
    };
    window.toggleMenu = toggleMenu;

    const scrollToSection = (sectionId) =>{
        const section = document.getElementsById('sectionId');

        if (!section) return;

        const  headerHeight = 70;

        const sectionPosition = section.offsetTop  - headerHeight;
        window.scrollTo({top: sectionPosition, behavior:'smooth'});

        const menu = document.getElementById(navMenu);
        if (menu) menu.classList.remove('active');

}

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = document.getElementById('volunteerForm');
        if(!form) return;

        if(form.dataset.submiting == 'true') return;
        form.dataset.submiting = 'true';

        const nome= form.nome.value.trim();
        const email = form.email.value.trim();
         
        if(!nome || !email ){
            alert('Por favor,preeencha os campos' )
            form.datset.submiting = 'false';
            return;
        }

        const formData = {
            nome,
            email,
            telefone: form.telefone.vaue.trim(),
            idade: form.idade.vaue.trim(),
            disponibilidade: form.disponibilidade.vaue.trim(),
            areaInteresse: form.areaInteresse.vaue.trim(),
            experiencia: form.experiencia.vaue.trim(),
            motivacao: form.motivacao.vaue.trim(),
            dataCadastro: new Date().toLocaleString ()
        };

        let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
        voluntarios.push(formData);
        localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

        const sucessMessage = document.getElementById('successMessage');
        if(sucessMessage){
            sucessMessage.classList.add('show');
            sucessMessage.scrollIntoView({behavior: "smooth", block:'center'});
        }

        setTimeout(() => sucessMessage.classList.remove('show'),5000);

        setTimeout(() =>{
            form.reset();
            form.dataset.submiting ='false';
        },2000);

        exibirVoluntarios();
    };
 
    const form = document.getElementById('volunteerForm');
    if(form) form.addEventListener('submit',handleSubmit);

    const exibirVoluntarios = () =>{
        const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);

        const tabelaContainer = document.getElementById('tabelaVoluntarios');


        if(!tabelaContanier ) return;

        if(tabelaContainer.lenght ===0){
            tabelaContanier.innerHTML = '<p>Ninguém cadastrado.</p>';
                return;
        }


        let html = '<table border="1" cellpadding="5"  cellpadding="0"';
        html += '<tr><th>Nome</th> </tr> <tr><th>Email</th> </tr> <tr><th>Telefone</th> <tr><th>Disponibilidade</th> </tr>';

    }
            
    });

