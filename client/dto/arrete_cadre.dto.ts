import type { ArreteRestriction } from "~/dto/arrete_restriction.dto";
import type { ZoneAlerte } from "~/dto/zone_alerte.dto";

export class ArreteCadre {
  id: number | null;
  numero: string;
  dateDebut: string | null;
  dateFin: string | null;
  fichier: any;
  departements: any[];
  departementPilote: any;
  zonesAlerte: ZoneAlerte[];
  usagesArreteCadre: any[];
  statut: 'a_valider' | 'a_venir' | 'publie' | 'abroge';
  arretesRestriction: ArreteRestriction[];
  arreteCadreAbroge: ArreteCadre | null;

  communeNiveauGraviteMax: 'all' | 'aep' | 'none' | null;
  niveauGraviteSpecifiqueEap: boolean | null;
  ressourceEapCommunique: 'esu' | 'eso' | 'max' | null;
  // TMP
  superpositionCommune: 'yes_distinct' | 'yes_all' | 'yes_except_aep' | 'yes_only_aep' | 'no' | null;
  
  // To upload file
  file: any;

  constructor() {
    this.id = null;
    this.numero = '';
    this.dateDebut = null;
    this.dateFin = null;
    this.fichier = null;
    this.statut = 'a_valider';
    this.departements = [];
    this.zonesAlerte = [];
    this.usagesArreteCadre = [];
    this.communeNiveauGraviteMax = null;
    this.niveauGraviteSpecifiqueEap = null;
    this.ressourceEapCommunique = null;
    this.superpositionCommune = null;
    this.arretesRestriction = [];
    this.arreteCadreAbroge = null;
  }
}

export enum ArreteCadreStatutFr {
  a_valider = 'Brouillon',
  a_venir = 'En vigueur prochainement',
  publie = 'En vigueur',
  abroge = 'Abrogé',
}
