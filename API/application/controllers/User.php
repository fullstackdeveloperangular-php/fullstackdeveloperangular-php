<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('User_Model');
	}

	public function addUser()
	{
			

		$dulieu  = array(
			'username' => $this->input->post('username'), 
			'password' => md5($this->input->post('password')), 
			'level' =>  $this->input->post('level')
		);
		if($this->User_Model->insert($dulieu)){
			echo 'success!';
		}
		else{echo "failure!";}
	}

}

/* End of file User.php */
/* Location: ./application/controllers/User.php */