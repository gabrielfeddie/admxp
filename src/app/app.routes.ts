import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Receitas } from './receitas/receitas';
import { PedidoDeLogin } from './pedido-de-login/pedido-de-login';
import { CHomeApp } from './c-home-app/c-home-app';
import { Despesas } from './despesas/despesas';
import { Financeiro } from './financeiro/financeiro';
import { CondominioDados } from './condominio-dados/condominio-dados';
import { CondominioDashboard } from './condominio-dashboard/condominio-dashboard';
import { CondominioRelatorios } from './condominio-relatorios/condominio-relatorios';
import { CondominioUnidades } from './condominio-unidades/condominio-unidades';



export const routes: Routes = [

    {path: '', component: CHomeApp},
    {path: 'home', component: Home,},
    {path: 'login', component:Login, title:"Login"},
    {path: 'despesas', component:Despesas, title:"Despesas"},
    {path: 'financeiro', component:Financeiro, title:"Financeiro"},
    {path: 'condominio-dados', component:CondominioDados, title:"Dados do condomínio"},
    {path: 'condominio-dashboard', component:CondominioDashboard, title:"Dashboard"},
    {path: 'condominio-relatorios', component:CondominioRelatorios, title:"Relatórios"},
    {path: 'condominio-unidades', component:CondominioUnidades, title:"Unidades"},
    {path: 'pedido-login', component:PedidoDeLogin},
    {path: 'receitas', component:Receitas, title:"Receitas"}

    
];
