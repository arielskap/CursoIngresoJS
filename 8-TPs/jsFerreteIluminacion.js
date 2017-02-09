/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var lampara;
 	var preciototal;
 	var preciototal2;
 	var modelo;
 	modelo=document.getElementById("Marca").value;
 	lampara=document.getElementById('Cantidad').value;
 	lampara=parseInt(lampara);
 	precio=35;
 	precio=parseInt(precio);
 	switch (lampara)
 	{
 		case 5:
 		{
 			preciototal=lampara*precio;
 			switch (modelo)
 			{
 				case "ArgentinaLuz":
 				{
 					preciototal2=(preciototal*40)/100;
 					preciototal=preciototal-preciototal2;
 					document.getElementById("precioDescuento").value=preciototal;
 					break;
 				}
 				default:
 				{
 					preciototal2=(preciototal*30)/100;
 					preciototal=preciototal-preciototal2;
 					document.getElementById("precioDescuento").value=preciototal;
 					break;
 				}
 			}	
 		break;
 		}
 		case 4:
 		{
 			if("ArgentinaLuz" || "“FelipeLamparas”")
 			{
 				preciototal2=(preciototal*25)/100;
 				preciototal=preciototal-preciototal2;
 				document.getElementById("precioDescuento").value=preciototal;
 			}
 			else
 			{
 				preciototal2=(preciototal*20)/100;
 				preciototal=preciototal-preciototal2;
 				document.getElementById("precioDescuento").value=preciototal;
 			}
 		}
 	}
}