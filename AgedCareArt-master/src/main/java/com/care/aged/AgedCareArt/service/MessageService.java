package com.care.aged.AgedCareArt.service;

import com.care.aged.AgedCareArt.entity.Message;
import com.care.aged.AgedCareArt.exception.NotFoundException;

import java.util.List;

public interface MessageService {

  Message save(Message message) throws NotFoundException;

  List<Message> findAll();

  Message findById(Long id);

  void delete(Long id);

  List<Message> findForReceiver(Long id);

  List<Message> loadSentMessages(Long id);
}
