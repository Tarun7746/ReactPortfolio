import axios from "axios";
import { retrieveData } from "../LocalConnection/LocalConnection.js";
const appauth_key = "barlays@2029";
let APL_LINK = "http://192.168.1.26:8000/";
// let APL_LINK = "http://172.20.10.3:8000/";
//APL_LINK = "https://back.barleys.se/";
// APL_LINK = "http://127.0.0.1:8000/";
// let Website_URL = "https://icmbhopal.org/";
let Website_URL = "/admin_login";
let local_server_link_react = APL_LINK + "api/";
let local_server_link_website = APL_LINK + "/api/website_link/";
let feedback_online_link = "https://www.wowreviews.co/Adminmaster/";
/*Get apis*/
const login_to_superadmin = local_server_link_react + "login/";
const get_all_social_links = local_server_link_react + "social/";
const get_contact_us = local_server_link_react + "contact/";
const get_cooprative_acts = local_server_link_react + "updcoop/";
const get_staff_data = local_server_link_react + "getadmin/";

const get_facility = local_server_link_react + "getfacilities/";
const get_faculty_deatails = local_server_link_react + "getfaculty/";
const guest_faculty = local_server_link_react + "guestfaculty/";
const get_syllabus = local_server_link_react + "getacad/";
const get_important_links = local_server_link_react + "getlink/";
const get_news = local_server_link_react + "getnews/";
const get_programe_addvisory = local_server_link_react + "getprog/";
const get_rti = local_server_link_react + "getrti/";
const get_gravidational = local_server_link_react + "getred/";

/*__insert apis*/
const insert_news_data = local_server_link_react + "updnews/";
const insert_GuestFaculity_data = local_server_link_react + "guestinsert/";
const insert_Syllabus_data = local_server_link_react + "updacad/";
const insert_Acts_data = local_server_link_react + "getcoop/";
const insert_implink_data = local_server_link_react + "infolink/";
const insert_facilitie_data = local_server_link_react + "updfacilities/";
const insert_facultYDeatails_data = local_server_link_react + "updfaculty/";
const insert_program_data = local_server_link_react + "updprog/";

/*----update */
const update_social_data = local_server_link_react + "putlink/";
const update_syllabus = local_server_link_react + "updsyllb/";
const update_Acts = local_server_link_react + "updcooperative/";
const UpdateNews = local_server_link_react + "updnewsinfo/";
const update_GuestFaculity_data = local_server_link_react + "updguest/";
const update_rti_data = local_server_link_react + "updrti/";
const update_graviditional_data = local_server_link_react + "updred/";
const update_implinks_data = local_server_link_react + "updlink/";
const update_facilitie_data = local_server_link_react + "facilitiesinfo/";
const update_faculti_details = local_server_link_react + "newfacul/";
const update_programme = local_server_link_react + "updadv/";

/*-----Delete apis */
const delete_syllabus = local_server_link_react + "delsyllabus/";
const delete_Acts = local_server_link_react + "del_coop_acts/";
const delete_implink = local_server_link_react + "del_imp_link/";
const delete_News = local_server_link_react + "del_coop_acts/";
const delete_facultie = local_server_link_react + "getfaculty/";
const delete_program = local_server_link_react + "deladvisory/";
const delete_GuestFaculity_data =
  local_server_link_react + "del_guest_faculty/";

/**admin panel */

const save_update_blog = local_server_link_react + "save_update_blog/";

const save_update_seo = local_server_link_react + "save_update_seo/";
const update_assign_staff = local_server_link_react + "update_assign_staff/";
const get_all_seo = local_server_link_react + "get_all_seo/";
const save_update_imagelink =
  local_server_link_react + "save_update_imagelink/";
const get_all_imagelink = local_server_link_react + "get_all_imagelink/";
const save_update_menu = local_server_link_react + "save_update_menu/";

const save_update_website_data =
  local_server_link_react + "save_update_website_data/";
const get_all_website_data = local_server_link_react + "get_all_website_data/";

const save_update_team = local_server_link_react + "save_update_team/";

const save_update_silder_image =
  local_server_link_react + "save_update_silder_image/";
const get_all_slider_image = local_server_link_react + "get_all_slider_image/";
const save_update_hall = local_server_link_react + "save_update_hall/";

const save_update_landmark = local_server_link_react + "save_update_landmark/";

const save_update_event_timing =
  local_server_link_react + "save_update_event_timing/";
const get_all_event_timing = local_server_link_react + "get_all_event_timing/";

const save_update_event_listing =
  local_server_link_react + "save_update_event_listing/";

const save_update_staff = local_server_link_react + "save_update_staff/";
const save_update_main_lead =
  local_server_link_react + "save_update_main_lead/";

const save_again_date_remark =
  local_server_link_react + "save_again_date_remark/";

const delete_update_data = local_server_link_react + "delete_master_data/";
const feedback_online_link_main = feedback_online_link + "bad_bus_search_api";

const admin_dashboard_url = local_server_link_react + "admin_dashboard_url/";
const get_all_usermaster = local_server_link_react + "get_all_usermaster/";
const save_update_usermaster =
  local_server_link_react + "save_update_usermaster/";
const save_assign_rights = local_server_link_react + "save_assign_rights/";
const get_userright_data = local_server_link_react + "get_userright_data/";

/**admin  panel */

// API functions

const server_post_data = async (url_for, form_data) => {
  // const headers = {
  //   "Content-Type": "application/json",
  // };

  if (form_data === null) {
    form_data = new FormData();
  }

  return axios.post(url_for, form_data);
};

export {
  APL_LINK,
  Website_URL,
  appauth_key,
  server_post_data,
  login_to_superadmin,

  /*Admin api */
  local_server_link_website,
  save_update_blog,
  delete_update_data,
  save_update_seo,
  get_all_seo,
  save_update_imagelink,
  get_all_imagelink,
  save_update_menu,
  save_update_website_data,
  get_all_website_data,
  save_update_team,
  save_update_silder_image,
  get_all_slider_image,
  save_update_hall,
  save_update_event_timing,
  get_all_event_timing,
  save_update_event_listing,
  save_update_staff,
  save_update_main_lead,
  save_again_date_remark,
  feedback_online_link_main,
  save_update_landmark,
  admin_dashboard_url,
  get_all_usermaster,
  save_update_usermaster,
  save_assign_rights,
  get_userright_data,
  update_assign_staff,
  get_all_social_links,
  get_contact_us,
  get_cooprative_acts,
  get_staff_data,
  get_facility,
  get_faculty_deatails,
  guest_faculty,
  get_syllabus,
  get_important_links,
  get_news,
  get_programe_addvisory,
  get_gravidational,
  get_rti,
  delete_syllabus,
  update_syllabus,
  insert_news_data,
  insert_GuestFaculity_data,
  update_GuestFaculity_data,
  delete_GuestFaculity_data,
  UpdateNews,
  delete_News,
  update_social_data,
  update_rti_data,
  update_graviditional_data,
  insert_Syllabus_data,
  insert_Acts_data,
  delete_Acts,
  update_Acts,
  update_implinks_data,
  insert_implink_data,
  delete_implink,
  update_facilitie_data,
  insert_facilitie_data,
  delete_facultie,
  update_faculti_details,
  insert_facultYDeatails_data,
  insert_program_data,
  update_programme,
  delete_program,
};
