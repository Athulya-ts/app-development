package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.events;
import com.iamneo.security.service.events_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class eventsController {

	private final events_serv serv;
	
	@PostMapping("/eventsAddDetails")
	public events addInfo(@RequestBody events st)
	{
		return serv.saveDetails(st);
	}

	@GetMapping("/eventsShowDetails")
	public List<events> fetchDetails()
	{
		return serv.getDetails();
	}

	@PutMapping("/eventsUpdateDetails")
	public ResponseEntity<events> updateInfo(@RequestBody events st1)
	{
		events updatedEmp = serv.updateDetails(st1);
		return ResponseEntity.ok(updatedEmp);
	}
	
	@DeleteMapping("/eventDelete/{eid}")
	public String deleteInfo(@PathVariable("eid")Long eid)
	{
		serv.deleteDetails(eid);
		return "Deleted details";
	}
	
	//sorting
	@GetMapping("/EventSorting")
	public List<events> getWithSort(@PathVariable String event_date) {
		return serv.getSorted(event_date);
	}

	
	//	@DeleteMapping("/trainingDelete/{eid}")
//	public ResponseEntity<HttpStatus> deleteInfo(@PathVariable Long eid)
//	{
//		serv.deleteDetails(eid);
//		return ResponseEntity.ok(HttpStatus.NO_CONTENT);
//	}
//
//			// pagination
//			@GetMapping("/InfoPagination/{offset}/{pageSize}")
//			public List<personal_info> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}