
package com.iamneo.security.service;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.courses;
import com.iamneo.security.repository.courses_repo;
@Service
public class courses_serv 

{
	@Autowired
	courses_repo repo;
	
	public courses saveDetails(courses e)
	{
		return repo.save(e);
	}
	
	public List<courses> getDetails()
	{
		return repo.findAll();
	}
	public List<courses> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<courses> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<courses> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public courses updateDetails(courses e1)
	{
		return repo.saveAndFlush(e1);
	}
	public void deleteDetails(Long id) 
	{
		repo.deleteById(id);
	}
    public Stream<Order> getEmployeeById(Long id)
    {
        return repo.findById(id).get();
    }
	
}